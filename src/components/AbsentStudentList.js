// AbsentStudentList.js
import React from "react";

const AbsentStudentList = ({ absentStudentList, toggleHandler }) => {
  return (
    <div className="list absent-student">
      <h2>Absent Students</h2>
      <ul>
        {absentStudentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => toggleHandler(student)}>
              accidentally Added
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsentStudentList;
