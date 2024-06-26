/*==================================================
/src/store/thunks.js

It contains all Thunk Creators and Thunks.
================================================== */
import * as ac from "./actions/actionCreators"; // Import Action Creators ("ac" keyword Action Creator)
//const axios = require('axios');
import axios from "axios";

//All Campuses
// THUNK CREATOR:
export const fetchAllCampusesThunk = () => async (dispatch) => {
  // The THUNK
  try {
    // API "get" call to get "campuses" data from database
    let res = await axios.get(`/api/campuses`);
    // Call Action Creator to return Action object (type + payload with "campuses" data)
    // Then dispatch the Action object to Reducer to update state
    dispatch(ac.fetchAllCampuses(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Add Campus
// THUNK CREATOR:
export const addCampusThunk = (campusData) => async (dispatch) => {
  try {
    const response = await axios.post("/api/campuses", campusData);
    dispatch(ac.addCampus(response.data));
    return response.data;
  } catch (error) {
    console.error("Failed to add campus:", error);
  }
};

// Delete Campus
// THUNK CREATOR:
export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(ac.deleteCampus(campusId));
  } catch (error) {
    console.error("Failed to delete campus:", error);
  }
};

// Single Campus
// THUNK CREATOR:
export const fetchCampusThunk = (id) => async (dispatch) => {
  // The THUNK
  try {
    // API "get" call to get a student data (based on "id")from database
    let res = await axios.get(`/api/campuses/${id}`);
    dispatch(ac.fetchCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Edit Campus
// THUNK CREATOR:
export const updateCampusThunk = (campusData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `/api/campuses/${campusData.id}`,
      campusData
    );
    dispatch(ac.editCampus(response.data));
    return response.data;
  } catch (error) {
    console.error("Error updating campus:", error);
  }
};

// Add a single student to a campus and remove a single student from a campus
export const addStudentToCampusThunk =
  (studentData, campusId) => async (dispatch) => {
    try {
      const response = await axios.post(
        `/api/campuses/${campusId}/students`,
        studentData
      );
      dispatch(ac.addStudentToCampus(response.data, campusId));
      return response.data; // return the newly created student data
    } catch (error) {
      console.error("Failed to add student to campus:", error);
      throw error; // throw the error to be caught in the calling function
    }
  };

export const removeStudentFromCampusThunk =
  (campusId, studentId) => async (dispatch) => {
    try {
      await axios.delete(`/api/campuses/${campusId}/students/${studentId}`);
      dispatch(ac.removeStudentFromCampus(campusId, studentId));
    } catch (error) {
      console.error("Failed to remove student from campus:", error);
    }
  };

// All Students
// THUNK CREATOR:
export const fetchAllStudentsThunk = () => async (dispatch) => {
  // The THUNK
  try {
    // API "get" call to get "students" data from database
    let res = await axios.get(`/api/students`);
    // Call Action Creator to return Action object (type + payload with "students" data)
    // Then dispatch the Action object to Reducer to update state
    dispatch(ac.fetchAllStudents(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Add Student
// THUNK CREATOR:
export const addStudentThunk = (student) => async (dispatch) => {
  // The THUNK
  try {
    // API "post" call to add "student" object's data to database
    let res = await axios.post(`/api/students`, student);
    // Call Action Creator to return Action object (type + payload with new students data)
    // Then dispatch the Action object to Reducer to update state
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// Edit Campus
// THUNK CREATOR:
export const updateStudentThunk = (student) => async (dispatch) => {
  // The THUNK
  try {
    // API "put" call to update student (based on "id" and "student" object's data) from database
    let res = await axios.put(`/api/students/${student.id}`, student);
    // Call Action Creator to return Action object (type + payload with updated student data)
    // Then dispatch the Action object to Reducer to update state
    dispatch(ac.editStudent(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// Delete Student
// THUNK CREATOR:
export const deleteStudentThunk = (studentId) => async (dispatch) => {
  // The THUNK
  try {
    // API "delete" call to delete student (based on "studentID") from database
    await axios.delete(`/api/students/${studentId}`);
    // Delete successful so change state with dispatch
    dispatch(ac.deleteStudent(studentId));
  } catch (err) {
    console.error(err);
  }
};

// Edit Student
// THUNK CREATOR:
export const editStudentThunk = (student) => async (dispatch) => {
  // The THUNK
  try {
    // API "put" call to update student (based on "id" and "student" object's data) from database
    let updatedStudent = await axios.put(
      `/api/students/${student.id}`,
      student
    );
    // Update successful so change state with dispatch
    dispatch(ac.editStudent(updatedStudent));
  } catch (err) {
    console.error(err);
  }
};

// Single Student
// THUNK CREATOR:
export const fetchStudentThunk = (id) => async (dispatch) => {
  // The THUNK
  try {
    // API "get" call to get a specific student (based on "id") data from database
    let res = await axios.get(`/api/students/${id}`);
    // Call Action Creator to return Action object (type + payload with student data)
    // Then dispatch the Action object to Reducer to display student data
    dispatch(ac.fetchStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};
