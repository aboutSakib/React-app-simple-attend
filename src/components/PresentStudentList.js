// PresentStudentList.js
import React from "react";

const PresentStudentList = ({ presentStudentList, toggleHandler }) => {
  return (
    <div className="list present-student">
      <h2>Present Students</h2>
      <ul>
        {presentStudentList.map((student) => (
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

export default PresentStudentList;
