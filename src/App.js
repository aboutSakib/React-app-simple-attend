import React, { useState } from "react";
import AbsentStudentList from "./components/AbsentStudentList";
import PresentStudentList from "./components/PresentStudentList";
import StudentList from "./components/StudentList";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const presentStudentList = students.filter(
    (student) => student.isPresent === true
  );
  const absentStudentList = students.filter(
    (student) => student.isPresent === false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert("Please provide a valid name");
      return;
    }
    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: Date.now().toString(),
      name: studentName,
      isPresent: null,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const removeHandler = (studentID) => {
    const updateStudentArray = students.filter(
      (student) => student.id !== studentID
    );
    setStudents(updateStudentArray);
  };

  const editHandler = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };

  const updateHandler = () => {
    updateStudent(editableStudent, "name", studentName);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  };

  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(
        `The student is already in the ${
          student.isPresent === true ? "Present" : "Absent"
        } list`
      );
    }
    updateStudent(student, "isPresent", true);
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(
        `The student is already in the ${
          student.isPresent === true ? "Present" : "Absent"
        } list`
      );
    }
    updateStudent(student, "isPresent", false);
  };

  const toggleHandler = (student) => {
    updateStudent(student, "isPresent", !student.isPresent);
  };

  const updateStudent = (item, propertyName, propertyValue) => {
    const updatedStudentArray = students.map((student) => {
      if (student.id === item.id) {
        return { ...student, [propertyName]: propertyValue };
      }
      return student;
    });
    setStudents(updatedStudentArray);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="submit">
          {editMode ? "Update Student" : "Create Student"}
        </button>
      </form>
      <StudentList
        students={students}
        editHandler={editHandler}
        removeHandler={removeHandler}
        makePresentHandler={makePresentHandler}
        makeAbsentHandler={makeAbsentHandler}
        toggleHandler={toggleHandler}
      />
      <PresentStudentList
        presentStudentList={presentStudentList}
        toggleHandler={toggleHandler}
      />
      <AbsentStudentList
        absentStudentList={absentStudentList}
        toggleHandler={toggleHandler}
      />
    </div>
  );
};

export default App;
