import React, { useEffect } from "react";
import EditRow from "./editRow";

const Table = ({ tableValue, editClick, editId}) => {
  // {console.log(tableValue)}
  return (
    <form>
    <table className="table-div">
      <tr className="table-head">
        <th>SN</th>
        <th>Name</th>
        <th>Email</th>
        <th>password</th>
        <th>Action</th>
      </tr>
      {tableValue?.map((item, index) => {
          return (
            <>
            {editId===item.id?(<EditRow/> ):(
               <tr className="table-data">
              <td  className="table-data">{index + 1}</td>
               <td  className="table-data">{item.name}</td>
               <td  className="table-data">{item.email}</td>
               <td  className="table-data">{item.password}</td>
               <td>
                 <button onClick={(event)=>{editClick(event, item)}}>edit</button>
               </td>
             </tr>
            )}
             
             
             
            </>
          )
      })
      }
    </table>
    </form>
    )
 
}
export default Table