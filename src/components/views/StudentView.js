/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: "auto",
    marginBottom: 100,
    width: "100%",
    color: "white",
    backgroundColor: "#6b84e5",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    marginBottom: 12,
    padding: 5,
    color: "inherit",
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the title 10% bigger upon hover
    },
  },
  button: {
    marginBottom: 12,
    fontSize: 13,
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the button 10% bigger upon hover
    },
  },
});

const StudentView = ({ student, onEditStudent }) => {
  const prevCampusRef = useRef();
  const classes = useStyles();

  useEffect(() => {
    const prevCampus = prevCampusRef.current;
    if (prevCampus && student.campus && prevCampus.id !== student.campus.id) {
      console.log("Student campus has been updated");
    }
    prevCampusRef.current = student.campus;
  }, [student.campus]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h2">
          {student.firstname + " " + student.lastname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Email: {student.email}
        </Typography>
        <img
          src={student.imageUrl}
          alt={student.firstname + " " + student.lastname}
          style={{ width: "300px" }}
        />
        <Typography className={classes.pos} variant="h5">
          GPA: {student.gpa}
        </Typography>

        {student && student.campus ? (
          <RouterLink
            to={`/campus/${student.campus.id}`}
            className={classes.link}
          >
            <Typography variant="h4" component="h2" className={classes.link}>
              {student.campus.name}
            </Typography>
          </RouterLink>
        ) : (
          <Typography variant="h4" component="h2">
            Student is not enrolled in any college campus
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => onEditStudent()}
        >
          Edit Student
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentView;
