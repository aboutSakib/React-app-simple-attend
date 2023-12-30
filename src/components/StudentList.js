const StudentList = ({
  students,
  editHandler,
  removeHandler,
  makePresentHandler,
  makeAbsentHandler,
  toggleHandler,
}) => {
  return (
    <div className="studentSection">
      <div className="list all-student">
        <h2>All Students</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={() => editHandler(student)}>Edit</button>
              <button onClick={() => removeHandler(student.id)}>Remove</button>
              <button onClick={() => makePresentHandler(student)}>
                Make Present
              </button>
              <button onClick={() => makeAbsentHandler(student)}>
                Make Absent
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
