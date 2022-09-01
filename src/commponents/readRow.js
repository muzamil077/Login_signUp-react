import React from "react";



const ReadRow =({item, editClick, index})=>{
    return(
        <>
           <tr className="table-data">
              <td  className="table-data">{index + 1}</td>
               <td  className="table-data">{item.name}</td>
               <td  className="table-data">{item.email}</td>
               <td  className="table-data">{item.password}</td>
               <td>
                 <button onClick={(event)=>{editClick(event, item)}}>edit</button>
               </td>
             </tr>
        </>
    )
}


export default ReadRow


