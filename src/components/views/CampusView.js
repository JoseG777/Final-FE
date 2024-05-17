/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = ({campus, onEditCampus, onAddStudent}) => {
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.imageUrl ? (
          <img src={campus.imageUrl} alt={campus.name} style={{ width: '100px', height: '100px' }}/>
          ) : (
            <p>No image available</p>
          )}
      {campus.students && campus.students.map(student => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h2>{student.firstname} {student.lastname}</h2>
          </Link>
        </div>
      ))}
      <button onClick={() => onAddStudent(campus.id)}>Add New Student to Campus</button>
      <button onClick={() => onEditCampus()}>Edit Campus</button>
    </div>
  );
};

export default CampusView;