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
    minWidth: 275,
    marginBottom: 12,
    backgroundColor: "#f5f5f5", // This is a light grey color, you can change it to match your desired background color
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
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
        <Typography variant="h5" component="h2">
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
        <Typography className={classes.pos} color="textSecondary">
          GPA: {student.gpa}
        </Typography>

        {student && student.campus ? (
          <RouterLink
            to={`/campus/${student.campus.id}`}
            className={classes.link}
          >
            <Typography variant="h6" component="h2">
              {student.campus.name}
            </Typography>
          </RouterLink>
        ) : (
          <Typography variant="h6" component="h2">
            Student is not enrolled in any college campus
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={() => onEditStudent()}
        >
          Edit Student
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentView;
