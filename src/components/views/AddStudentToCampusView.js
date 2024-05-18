/*==================================================
AddStudentToCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the add student to campus page.
================================================== */
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../containers/Header";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  formContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
  },
  formTitle: {
    backgroundColor: "#c5c8d6",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "3px",
  },
}));

const FormField = ({ label, name, value, onChange, required = false }) => (
  <TextField
    fullWidth
    variant="outlined"
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
  />
);

const AddStudentToCampusView = ({ campusId, onSubmit }) => {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    imageUrl: "",
    gpa: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newStudent = await onSubmit(formData, campusId);
      if (newStudent) {
        history.push(`/student/${newStudent.id}`);
      } else {
        setError("Failed to create new student");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <Typography variant="h5" className={classes.formTitle}>
        Add a Student to Campus
      </Typography>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <FormField
            label="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <FormField
            label="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <FormField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormField
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <FormField
            label="GPA"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            required
          />
          <Button type="submit" color="primary" variant="contained">
            Add Student
          </Button>
        </form>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default AddStudentToCampusView;
