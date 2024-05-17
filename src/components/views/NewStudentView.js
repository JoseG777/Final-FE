/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import { Button, TextField, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
}));

const NewStudentView = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.formContainer}>
      <Typography variant="h4" className={classes.title}>
        Add New Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          className={classes.inputField}
          label="First Name"
          name="firstname"
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          variant="outlined"
          className={classes.inputField}
          label="Last Name"
          name="lastname"
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          variant="outlined"
          className={classes.inputField}
          label="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          className={classes.inputField}
          label="Image URL"
          name="imageUrl"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="outlined"
          className={classes.inputField}
          label="GPA"
          name="gpa"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="outlined"
          className={classes.inputField}
          label="Campus Id"
          name="campusId"
          onChange={handleChange}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default NewStudentView;
