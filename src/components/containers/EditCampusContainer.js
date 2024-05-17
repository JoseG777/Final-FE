import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampusThunk, updateCampusThunk } from '../../store/thunks';
import EditCampusForm from '../views/EditCampusView'; 
import Header from './Header';

class EditCampusContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCampus(id);
  }

  handleSave = (campusData) => {
    this.props.updateCampus(campusData).then(() => {
      this.props.history.push(`/campus/${campusData.id}`);
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.campus && (
          <EditCampusForm 
            initialData={this.props.campus} 
            onSave={this.handleSave} 
          />
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  updateCampus: (campusData) => dispatch(updateCampusThunk(campusData))
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
