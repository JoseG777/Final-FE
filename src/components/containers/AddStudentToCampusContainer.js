import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addStudentToCampusThunk } from "../../store/thunks";
import AddStudentToCampusView from "../views/AddStudentToCampusView";

class AddStudentToCampusContainer extends Component {
  state = {
    error: null,
  };

  handleSubmit = async (studentData, campusId) => {
    try {
      const newStudent = await this.props.addStudentToCampus(
        studentData,
        campusId
      );
      if (newStudent) {
        this.props.history.push(`/student/${newStudent.id}`);
      } else {
        this.setState({ error: "Failed to create new student" });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    const { campusId } = this.props.match.params;
    return (
      <AddStudentToCampusView
        campusId={campusId}
        onSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

const mapDispatch = (dispatch) => ({
  addStudentToCampus: (studentData, campusId) =>
    dispatch(addStudentToCampusThunk(studentData, campusId)),
});

export default withRouter(
  connect(null, mapDispatch)(AddStudentToCampusContainer)
);
