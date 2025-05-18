import React, { useEffect, useState } from "react";
import { createStudent,deleteStudent,getStudent } from "../Services/allAPI";

const Landing = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    course: "",
    address: "",
  });
const[apiData,getApiData]= useState([])
  const addStudent = async () => {
    let result = await createStudent(studentData)
    console.log(result)
  }
  const getStudents = async () => {
    let result= await getStudent()
    getApiData(result.data)
    console.log(result.data)
  }

  const deleteStudent = async ()=>{
    await deleteStudent()
  
  }
  useEffect(()=>{
    getStudents()
  },[])
  return (
    <div className="container w-50">
      <div className="mt-5 ">
        <h3 className="text-center text-danger">ADD STUDENTS</h3>
        <label htmlFor="name" className ="form-label">
          Name
        </label>
        <input
          onChange={(e)=>setStudentData({...studentData,name:e.target.value})}
          type="text"
          className ="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="course" className="form-label">
          Course
        </label>
        <input
        onChange={(e)=>setStudentData({...studentData,course:e.target.value})}
        type="text" className ="form-control" id="course" />
      </div>
      <div className ="mb-3">
        <label htmlFor="address" className ="form-label">
          AdclassName 
        </label>
        <input 
        onChange={(e)=>setStudentData({...studentData,address:e.target.value})}
        type="text" className="form-control" id="address" />
      </div>

      <button onClick={addStudent}   className ="btn btn-primary mb-3">
        Submit
      </button>

      {/* table */}
      <h4 className="text-danger text-center">STUDENTS LIST</h4>
      <table
        
        style={{ marginBottom: "120px" }}
        className ="table border border-1 mt-4 "
      >
        <thead>
          <tr className="border border-1">
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            apiData.map((eachStudent)=>(
              <tr className="border border-1">
              <th scope="row"></th>
              <td>{eachStudent.name}</td>
              <td>{eachStudent.course}</td>
              <td>{eachStudent.address}</td>
              <td><button onClick={deleteStudent} className="btn"><i className="fa-solid fa-trash"></i></button></td>
            </tr>
            ))
          }
        
        </tbody>
      </table>
    </div>
  );
};

export default Landing;
