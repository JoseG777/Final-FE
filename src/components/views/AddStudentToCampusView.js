import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../containers/Header';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  formTitle: {
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const AddStudentToCampusView = ({ campusId, onSubmit }) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, campusId);
  };

  return (
    <div>
        <Header />

        <div className={classes.formContainer}>
            <div className={classes.formTitle}>
                <Typography style={{fontWeight: 'bold', fontSize: '20px', color: '#11153e'}}>
                Add a Student to Campus
                </Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                <br/>
                <label>Last Name: </label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                <br/>
                <Button type="submit" color="primary" variant="contained">
                Add Student
                </Button>
            </form>
            </div>
        </div>  
  );
};

export default AddStudentToCampusView;
