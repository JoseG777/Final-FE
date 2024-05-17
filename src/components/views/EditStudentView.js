import React, { Component } from "react";
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
      <div>
        <h1>Edit Student</h1>
        <form onSubmit={this.handleSubmit} className={classes.formContainer}>
          <label>First Name: </label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
            className={classes.inputField}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
            className={classes.inputField}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            className={classes.inputField}
          />
          <br />
          <label>Image URL: </label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={this.handleChange}
            className={classes.inputField}
          />
          <br />
          <label>GPA: </label>
          <input
            type="text"
            name="gpa"
            value={gpa}
            onChange={this.handleChange}
            className={classes.inputField}
          />
          <br />
          <label>Campus ID: </label>
          <input
            type="text"
            name="campusId"
            value={campusId}
            onChange={this.handleChange}
            className={classes.inputField}
          />
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(EditStudentView);
