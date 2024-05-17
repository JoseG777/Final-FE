import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  EditCampusContainer,
  AddStudentToCampusContainer,
  NewCampusContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />

        {/* Campus Routes */}
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/campus/:id/edit" component={EditCampusContainer} />
        <Route path="/campus/:campusId/addstudent" component={AddStudentToCampusContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />

        {/* Student Routes */}
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
      </Switch>        
    </div>
  );
}

export default App;
