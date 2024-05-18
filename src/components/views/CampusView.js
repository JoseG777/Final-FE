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
    margin: "auto",
    color: "white",
    backgroundColor: "#6b84e5",
    height: "100vh",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    padding: 5,
    color: "inherit",
    transition: "transform 0.3s", // Smooth transition
    "&:hover": {
      transform: "scale(1.1)", // Makes the title 10% bigger upon hover
    },
  },
  studentCard: {
    fontSize: 19,
    width: "300px",
    margin: "auto",
    boxShadow: "0 0 10px 0 rgba(100, 100, 100, 0.3)",
    marginBottom: "30px",
    backgroundColor: "beige",
    color: "black",
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
        <Typography variant="h2" component="h2">
          {campus.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {campus.address}
        </Typography>
        <Typography variant="body1" component="p">
          {campus.description}
        </Typography>
        {campus.imageUrl ? (
          <img
            src={campus.imageUrl}
            alt={campus.name}
            style={{ width: "300px" }}
          />
        ) : (
          <Typography variant="body2" component="p">
            No image available
          </Typography>
        )}
        <Typography variant="h4" component="h2">
          Students:
        </Typography>
        {campus.students && campus.students.length > 0 ? (
          campus.students.map((student) => (
            <div key={student.id} className={classes.studentCard}>
              <hr />
              <RouterLink
                to={`/student/${student.id}`}
                className={classes.link}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.link}
                >
                  {student.firstname} {student.lastname}
                </Typography>
              </RouterLink>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
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
          className={classes.button}
          onClick={() => onEditCampus()}
        >
          Edit Campus
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => onAddStudent(campus.id)}
        >
          Create and Add Student
        </Button>
        <br />
        <RouterLink
          to={{
            pathname: "/students",
            state: { campusId: campus.id },
          }}
          className={classes.link}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add existing student?
          </Button>
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default CampusView;
