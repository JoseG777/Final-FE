/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";
const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Welcome to our Full-Stack CRUD Application!</h1>
      <h1> The purpose of this application is to allow users to efficiently manage their campuses </h1>
      <h1> As a user, you will be able to view campuses and students, add campuses and students, and edit existing campuses and students! </h1>

      <h2>Click the top right or here <Link to="/campuses">here</Link> to see all campuses</h2>
      <h2>Click the top right or here <Link to="/students">here</Link> to see all students</h2>
    </div>
  );    
}

export default HomePageView;