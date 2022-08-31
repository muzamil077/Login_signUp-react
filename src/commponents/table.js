import React, { useEffect } from "react";




const Table = ({tableValue}) => {
  // {console.log(tableValue)}
  return(
      <table className="table-div">
        <tr className="table-head">
          <th>SN</th>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
        </tr>
        {tableValue?.map((item, index) => {
            return (
              <>
                <tr className="table-data">
                  <td  className="table-data">{index + 1}</td>
                  <td  className="table-data">{item.name}</td>
                  <td  className="table-data">{item.email}</td>
                  <td  className="table-data">{item.password}</td>
                </tr>
              </>
            )
          })
        }
      </table>)
}
export default Table