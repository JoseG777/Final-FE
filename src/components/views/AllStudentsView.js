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
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    color: "white",
    marginBottom: 12,
    margin: "auto",
    width: "40%",
    backgroundColor: "#6b84e5",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    color: "inherit",
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the title 10% bigger upon hover
    },
  },
  button: {
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the button 10% bigger upon hover
    },
  },
});

const AllStudentsView = (props) => {
  const { students, deleteStudent, addStudentToCampus, fetchAllStudents } =
    props;
  const classes = useStyles();
  const location = useLocation();
  const [campusId, setCampusId] = useState(null);

  useEffect(() => {
    console.log("location.state.campusId:", location.state?.campusId);
    if (location.state && location.state.campusId) {
      setCampusId(location.state.campusId);
    }
  }, [location]);

  console.log("campusId", campusId);

  const handleAddStudentToCampus = async (studentData, campusId) => {
    try {
      await addStudentToCampus(studentData, campusId);
      fetchAllStudents(); // Refresh the student list after successful addition
    } catch (error) {
      console.error("Failed to add student to campus:", error);
    }
  };

  if (!students.length) {
    return (
      <div>
        <Typography variant="h5">
          There are no students in the system, please add students using the
          button below
        </Typography>
        <RouterLink to={`newstudent`} className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
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
                <Typography variant="h4" className={classes.link}>
                  {name}
                </Typography>
              </RouterLink>
              <Typography color="textSecondary">Email: {email}</Typography>
              <img src={imageUrl} alt={name} style={{ width: "150px" }} />
              <Typography variant="h6">GPA: {gpa}</Typography>
              <Typography variant="h6">Campus: {campus.name}</Typography>
              {campusId && !enrolled ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    handleAddStudentToCampus({ email: student.email }, campusId)
                  }
                >
                  Add to Campus
                </Button>
              ) : (
                <Typography color="textSecondary"> </Typography>
              )}
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
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
        <Button variant="contained" color="primary" className={classes.button}>
          Add New Student
        </Button>
      </RouterLink>
      <br />
      <br />
    </div>
  );
};

export default AllStudentsView;
