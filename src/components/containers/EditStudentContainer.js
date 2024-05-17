import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, updateStudentThunk } from "../../store/thunks";
import EditStudentForm from "../views/EditStudentView";
import Header from "./Header";

class EditStudentContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStudent(id);
  }

  handleSave = (studentData) => {
    this.props.updateStudent(studentData).then(() => {
      this.props.history.push(`/student/${studentData.id}`);
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.student && (
          <EditStudentForm
            initialData={this.props.student}
            onSave={this.handleSave}
          />
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  updateStudent: (studentData) => dispatch(updateStudentThunk(studentData)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);
