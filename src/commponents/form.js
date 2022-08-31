import React, { useState } from 'react';
import StudentForm from './form';
import Data from "./json"
function TableData() {
  const [studentData, setStudentData] = useState("");

  const tableRows = studentData
  return(
        <table >
          <tbody>
          {tableRows.map((info) => (
            <tr key={info.id}>
              <td>{info.id}</td>
              <td>{info.name}</td>
              <td>{info.city}</td>
            </tr>
               ))}
          </tbody>
        </table>
  )
  function addRows(value) {
    const totalStudents = studentData.length;
    value.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(value);
    setStudentData(updatedStudentData);
    return(
      <>
        <table>
          <thead>
            <tr>
              <th>Sr.NO</th>
              <th>Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        <StudentForm func={addRows}/>
        
      </>
    )
  };
} 
export default TableData;