import React from "react";








const EditRow  =(  cencelEditInput, editFormData, hendelEditFormData)=>{
    return(
        <>
        <tr>    
            <td>
                <input 
                type="text"
                required="required"
                placeholder="Enter your name"
                name="name"
                value={editFormData.name}
                onChange={ hendelEditFormData}
                >
                </input>
            </td>
            <td>
                <input 
                type="email"
                required="required"
                placeholder="Enter your email"
                name="email"
                value={editFormData.email}
                onChange={ hendelEditFormData}
                >
                </input>
            </td>
            <td>
                <input 
                type="password"
                required="required"
                placeholder="Enter your password"
                name="password"
                value={editFormData.password}
                onChange={ hendelEditFormData}
                >
                </input>
            </td>
            <td>
             <button type="submit">Save</button>
            </td>
            <td><button onClick={(evant)=> cencelEditInput(evant)}>Cancel</button></td>
            
        </tr>
      
        </>
    )
}

export default EditRow
