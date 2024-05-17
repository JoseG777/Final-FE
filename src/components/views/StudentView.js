/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const StudentView = ({ student, onEditStudent }) => {
  const prevCampusRef = useRef();

  useEffect(() => {
    const prevCampus = prevCampusRef.current;
    if (prevCampus && student.campus && prevCampus.id !== student.campus.id) {
      console.log("Student campus has been updated");
    }
    prevCampusRef.current = student.campus;
  }, [student.campus]);

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <p>Email: {student.email}</p>
      <img
        src={student.imageUrl}
        alt={student.firstname + " " + student.lastname}
      />
      <p>GPA: {student.gpa}</p>

      {student && student.campus ? (
        <Link to={`/campus/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
        </Link>
      ) : (
        <h3>Student is not enrolled in any college campus</h3>
      )}

      <button onClick={() => onEditStudent()}> Edit Student </button>
    </div>
  );
};

export default StudentView;
