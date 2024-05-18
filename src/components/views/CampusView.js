/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
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

const CampusView = ({
  campus,
  onEditCampus,
  onAddStudent,
  onRemoveStudent,
}) => {
  const classes = useStyles();
  const prevStudentsRef = useRef();

  useEffect(() => {
    const prevStudents = prevStudentsRef.current;
    if (prevStudents && prevStudents.length !== campus.students.length) {
      console.log("Student list has been updated");
    }
    prevStudentsRef.current = campus.students;
  }, [campus.students]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {campus.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {campus.address}
        </Typography>
        <Typography variant="body2" component="p">
          {campus.description}
        </Typography>
        {campus.imageUrl ? (
          <img
            src={campus.imageUrl}
            alt={campus.name}
            style={{ width: "100px", height: "100px" }}
          />
        ) : (
          <Typography variant="body2" component="p">
            No image available
          </Typography>
        )}
        <Typography variant="h6" component="h2">
          Students:
        </Typography>
        {campus.students && campus.students.length > 0 ? (
          campus.students.map((student) => (
            <div key={student.id}>
              <hr />
              <RouterLink
                to={`/student/${student.id}`}
                className={classes.link}
              >
                <Typography variant="h6" component="h2">
                  {student.firstname} {student.lastname}
                </Typography>
              </RouterLink>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onRemoveStudent(campus.id, student.id)}
              >
                Remove from Campus
              </Button>
              <hr />
            </div>
          ))
        ) : (
          <Typography variant="body2" component="p">
            There are no students currently enrolled.
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddStudent(campus.id)}
        >
          Create and Add Student
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEditCampus()}
        >
          Edit Campus
        </Button>
        <br />
        <RouterLink to={{
          pathname: "/students",
          state: { campusId: campus.id }
        }} className={classes.link}>
          <Button variant="contained" color="primary">
            Add existing student?
          </Button>
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default CampusView;