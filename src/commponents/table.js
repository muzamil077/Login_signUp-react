import React, { useEffect } from "react";
import EditRow from "./editRow";
import ReadRow from "./readRow";

const Table = ({ tableValue, editClick, editId, editFormData, hendelEditFormData}) => {
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
      {tableValue?.map((item, index, id) => {
          return (
            <>
            {editId===item.id?(<EditRow editFormData={editFormData}  hendelEditFormData={hendelEditFormData} />):(
              <ReadRow item={item} id={id} index={index} editClick={editClick}/>
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