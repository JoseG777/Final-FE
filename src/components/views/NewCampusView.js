// NewCampusView.js
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {  
    width: '500px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
  },
  inputField: {
    margin: '10px 0',
  },
}));

const NewCampusView = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <div>
      <h1>Add New Campus</h1>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Name"
            name="name"
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Address"
            name="address"
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Description"
            name="description"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Image URL"
            name="imageUrl"
            onChange={handleChange}
          />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewCampusView;
