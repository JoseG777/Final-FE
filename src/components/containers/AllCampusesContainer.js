/*==================================================
/src/components/containers\AllCampusesContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, 
         addStudentToCampusThunk,
         removeStudentFromCampusThunk,
         deleteCampusThunk
} from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  // Get all campuses data from back-end database
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();

    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchCampus(id);
    }
  }

  handleDeleteCampus = (campusId) => {
    this.props.deleteCampus(campusId);
  };

  handleAddStudent = (campusId) => {
    const newStudentData = { campusId, name: 'New Student',};
    this.props.addStudentToCampus(newStudentData);
  };

  handleRemoveStudent = (campusId, studentId) => {
    this.props.removeStudentFromCampus(campusId, studentId);
  };

  // Render All Campuses view by passing all campuses data as props to the corresponding View component
  render() {
    const { allCampuses } = this.props;

    return (
      <div>
        <Header />
        {!this.props.match.params.id && <AllCampusesView allCampuses={allCampuses} onDeleteCampus={this.handleDeleteCampus}  />}
      </div>
    );
  }
}

// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allCampuses".
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  };
};  
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    addStudentToCampus: (studentData) => dispatch(addStudentToCampusThunk(studentData)),
    removeStudentFromCampus: (campusId, studentId) => dispatch(removeStudentFromCampusThunk(campusId, studentId)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export store-connected container by default
// AllCampusesContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(AllCampusesContainer);