/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from "./Header";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStudent(id);
  }

  handleEditStudent = () => {
    this.props.history.push(`/student/${this.props.student.id}/edit`);
  };

  render() {
    return (
      <div>
        <Header />
        <StudentView
          student={this.props.student}
          onEditStudent={this.handleEditStudent}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
