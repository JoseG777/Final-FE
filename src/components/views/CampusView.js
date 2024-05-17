/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = ({
  campus,
  onEditCampus,
  onAddStudent,
  onRemoveStudent,
}) => {
  const prevStudentsRef = useRef();

  useEffect(() => {
    const prevStudents = prevStudentsRef.current;
    if (prevStudents && prevStudents.length !== campus.students.length) {
      console.log("Student list has been updated");
    }
    prevStudentsRef.current = campus.students;
  }, [campus.students]);

  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.imageUrl ? (
        <img
          src={campus.imageUrl}
          alt={campus.name}
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <p>No image available</p>
      )}
      <h2> Students: </h2>
      {campus.students &&
        campus.students.map((student) => (
          <div key={student.id}>
            <hr />
            <Link to={`/student/${student.id}`}>
              <h2>
                {student.firstname} {student.lastname}
              </h2>
            </Link>
            <button onClick={() => onRemoveStudent(campus.id, student.id)}>
              Remove from Campus
            </button>
            <hr />
          </div>
        ))}
      <button onClick={() => onAddStudent(campus.id)}>
        {" "}
        Create and Add Student{" "}
      </button>
      <br />
      <button onClick={() => onEditCampus()}> Edit Campus </button>

      <br />
      <Link to="/students">Add existing student?</Link>
    </div>
  );
};

export default CampusView;
