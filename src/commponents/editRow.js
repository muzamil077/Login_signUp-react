import React from "react";



const EditRow  =()=>{
    return(
        <>
        <tr>
            <td>
                <input 
                type="text"
                required="required"
                placeholder="Enter your name"
                name="name"
                >
                </input>
            </td>
            <td>
                <input 
                type="email"
                required="required"
                placeholder="Enter your email"
                name="email"
                >
                </input>
            </td>
            <td>
                <input 
                type="password"
                required="required"
                placeholder="Enter your password"
                name="password"
                >
                </input>
            </td>
        </tr>
        </>
    )
}

export default EditRow
