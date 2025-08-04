import React, { useEffect, useState } from "react";
import { deleteStudent, listStudent } from "../service/StudentService";
import {useNavigate} from "react-router-dom"

const ListStudentComponent = () => {

  const [students, setStudents] = useState([]);

  const navigator = useNavigate();
  
  function getAllStudents() {
    listStudent()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.error(error));
  }
  
  useEffect(() => {
    getAllStudents();
  }, [])
  
  function addStudent() {
    navigator("/add-student")
  }

  function updateStudent(id) {
    navigator(`/edit-student/${id}`)
  }

  function removeStudent(id) {
    deleteStudent(id).then((response) => {
      getAllStudents();
    }).catch(error => {
      console.error(error);
    })
  }

  return (
    <div className="container">
      <h2 className="text-center">List Of Students</h2>
      <button className="btn btn-primary mb-2" onClick={addStudent}>
        Add Student
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Student Last Name</th>
            <th>Student Address</th>
            <th>Student Class</th>
            {/* <th>Mobile Number</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.sid}>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.slastname}</td>
              <td>{student.saddr}</td>
              <td>{student.sclass}</td>
              {/* <td>{student.snum}</td> */}
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateStudent(student.sid)}
                >
                  Update
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-danger"
                  onClick={() => removeStudent(student.sid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
