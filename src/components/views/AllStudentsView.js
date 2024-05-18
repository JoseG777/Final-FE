/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
    backgroundColor: "#f5f5f5", // This is a light grey color, you can change it to match your desired background color
    width: "40%",
    margin: "auto",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    color: "inherit",
  },
});

const AllStudentsView = (props) => {
  const { students, deleteStudent} = props;
  const classes = useStyles();
  const location = useLocation();
  const [campusId, setCampusId] = useState(null);

  useEffect(() => {
    if (location.state && location.state.campusId) {
      setCampusId(location.state.campusId);
    }
  }, [location]);

  const addStudentToCampus = async (email) => {
    try {
      const response = await axios.put(`/api/campuses/${campusId}/students`, { email });
      alert(response.data.message); 
    } catch (error) {
      alert(error.response.data.message); 
    }
  };

  if (!students.length) {
    return (
      <div>
        <Typography variant="h6">
          There are no students in the system, please add students using the
          button below
        </Typography>
        <RouterLink to={`newstudent`} className={classes.link}>
          <Button variant="contained" color="primary">
            Add New Student
          </Button>
        </RouterLink>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4">All Students</Typography>

      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        let imageUrl = student.imageUrl;
        let gpa = student.gpa;
        let campus = student.campus;
        let enrolled = true;
        if (!campus) {
          campus = { name: "Not Enrolled" };
          enrolled = false;
        }
        let email = student.email;

        return (
          <Card className={classes.root} key={student.id}>
            <CardContent>
              <RouterLink
                to={`/student/${student.id}`}
                className={classes.link}
              >
                <Typography variant="h5">{name}</Typography>
              </RouterLink>
              <Typography color="textSecondary">Email: {email}</Typography>
              <img src={imageUrl} alt={name} style={{ width: "100px" }} />
              <Typography color="textSecondary">GPA: {gpa}</Typography>
              <Typography color="textSecondary">
                Campus: {campus.name}
              </Typography>
              {campusId && !enrolled && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => addStudentToCampus(student.email)}
              >
                Add to Campus
              </Button>
            )}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </Button>

            </CardContent>
          </Card>
        );
      })}
      <br />
      <RouterLink to={`/newstudent`} className={classes.link}>
        <Button variant="contained" color="primary">
          Add New Student
        </Button>
      </RouterLink>
      <br />
      <br />
    </div>
  );
};

export default AllStudentsView;
