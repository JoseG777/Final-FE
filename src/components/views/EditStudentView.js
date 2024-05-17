import React, { Component } from "react";
import { Button, TextField, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  formContainer: {
    width: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
  },
  inputField: {
    margin: "10px 0",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};
class EditStudentView extends Component {
  constructor(props) {
    super(props);
    const { initialData } = this.props;
    this.state = {
      firstname: initialData.firstname || "",
      lastname: initialData.lastname || "",
      email: initialData.email || "",
      imageUrl: initialData.imageUrl || "",
      gpa: initialData.gpa || "",
      campusId: initialData.campusId || "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "campusId" && value === "") {
      this.setState({ [name]: null });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email, imageUrl, gpa, campusId } = this.state;
    const updatedStudent = {
      id: this.props.initialData.id,
      firstname,
      lastname,
      email,
      imageUrl,
      gpa,
      campusId: campusId || null, // set campusId to null if it's not provided
    };
    this.props.onSave(updatedStudent);
  };

  render() {
    const { firstname, lastname, email, imageUrl, gpa, campusId } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.formContainer}>
        <Typography variant="h4" className={classes.title}>
          Edit Student
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="First Name"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
            required
          />

          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Last Name"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
            required
          />

          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Image URL"
            name="imageUrl"
            value={imageUrl}
            onChange={this.handleChange}
          />

          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="GPA"
            name="gpa"
            value={gpa}
            onChange={this.handleChange}
          />

          <TextField
            fullWidth
            variant="outlined"
            className={classes.inputField}
            label="Campus Id"
            name="campusId"
            value={campusId}
            onChange={this.handleChange}
          />

          <Button type="submit" color="primary" variant="contained" fullWidth>
            Save Changes
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(EditStudentView);
