import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addStudentToCampusThunk } from '../../store/thunks';
import AddStudentToCampusView from '../views/AddStudentToCampusView';

class AddStudentToCampusContainer extends Component {
  handleSubmit = (studentData) => {
    const { campusId } = this.props.match.params;
    if (!campusId) {
      console.error('Campus ID is undefined');
      return;
    }
    this.props.addStudentToCampus(studentData, campusId);
  };

  render() {
    const { campusId } = this.props.match.params;
    return (
      <AddStudentToCampusView 
        campusId={campusId} 
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => ({
  addStudentToCampus: (studentData, campusId) => dispatch(addStudentToCampusThunk(studentData, campusId))
});

export default withRouter(connect(null, mapDispatch)(AddStudentToCampusContainer));
