// NewCampusContainer.js
import Header from './Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';

class NewCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", 
      address: "", 
      description: "",
      imageUrl: "",
      redirect: false,
      redirectId: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { name, address, description, imageUrl } = this.state;
    const campusData = { name, address, description, imageUrl };
  
    try {
      const newCampus = await this.props.addCampus(campusData);
      if(newCampus && newCampus.id) {  
        this.setState({
          redirect: true,
          redirectId: newCampus.id,
          name: '', 
          address: '', 
          description: '',
          imageUrl: ''
        });
      } else {
        throw new Error('Failed to receive campus data');
      }
    } catch (error) {
      console.error('Error in creating campus:', error);
    }
  }
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }

    return (
      <div>
        <Header />
        <NewCampusView 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
      </div>          
    );
  }
}

const mapDispatch = (dispatch) => {
    return {
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    }
}

export default connect(null, mapDispatch)(NewCampusContainer);
