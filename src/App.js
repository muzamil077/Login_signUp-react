
 import React, { useTransition } from 'react';
 import { useState } from 'react';
 import Data from './commponents/json';
 import Table from './commponents/table';
 import css from "./commponents/style.css"
 function App() {
   const [state, setState] = useState({
     id:"",
     name: "",
     email:"",
     password: "",
   })
   const [tableValue, setTableValue] = useState([])
     const [submited, setIsSubmited] = useState(true)
     const [editId, setEditId] = useState(null)
     const [editFormData, setEditFormData] = useState({
      id:"",
      name:"",
      email:"",
      password:""
     })
     {console.log(editId)}
   const {name, email, password} = state
   const handleChange = (e) =>{
       setState({
         ...state,
         [e.target?.name]: e.target?.value
       })
   }
   const editClick = (event , item)=>{
    event.preventDefault()
    setEditId(item.id)
    const editValues = {
      name: item.name,
      email:item.email,
      password:item.password
    }
    setEditFormData(editValues)

   }
   const handleSubmit = (e) =>{
     e.preventDefault()
     setTableValue([...tableValue, state])
     document.getElementById("name").value= ""
     document.getElementById("email").value= ""
     document.getElementById("password").value= ""
   if(setState("")){
    setIsSubmited(false)
   }
   }
   const hendelEditFormData = (e)=>{
    e.preventDefault()
    setEditFormData({
      ...editFormData,
      [e.target?.name]: e.target?.value
    })
   }
   const cencelEditInput = (event)=>{
    event.preventDefault()
    setEditId(null)
    

   }
   return(
     <div className='form-form'>
         <form className='form-input' onSubmit={handleSubmit} >
              <input 
              className='name' 
              onChange={handleChange} 
              value={name}
              type="text"
              name="name"
              id='name'
              placeholder='Enter your name...'  />
               <br/>
             <input 
              className='name'
              onChange={handleChange} 
              value={email} 
              type="email" 
              name="email"
              id='email'
              placeholder="Enter your email.."  />
               <br/>
                <input 
                id='password'
                className='name' 
                onChange={handleChange} 
                type="password" 
                name="password"  
                value={password}
                placeholder="Enter your password.."/>
                <br/>
                
               <button className='form-btn' type='submit'> Submit</button>
          </form>
          <Table editFormData={editFormData}   hendelEditFormData ={ hendelEditFormData}  tableValue={tableValue} editId={editId}  editClick={editClick}/>

     </div>
     
     )
     
    

   
 }
 
 export default App
// import React, { useState } from 'react';
// import './App.css';
// import Data from './commponents/json';
// function App() {
//   const [state, setState] = useState(
//     {
//       Name:"",
//       email:"",
//       password:""
//     }

//   )
//   // console.log(state, "intial value of state")
//   const [data, setData]= useState([])
//   // console.log(data, "intial value of data")
  

//   const hendelChange =(event)=>{
//     event.preventDefault()
//     setState({
//       ...state,
//       [event.target?.name]:event.target?.value

//     })
//   }
//   const [Name, email, password] = state
//   const hendelSubmit=(event)=>{
//     event.preventDefault()
//     setData([...data, state])

//   }
//   console.log(data)
//   return (
//     <div>
//       <form onSubmit={hendelSubmit} >
//       <labal>Name:</labal>
//       <br/>
//       <input onChange={(event)=> hendelChange(event) } type="text" name="name" value={Name}/>
//       <br/>
//       <labal>E-mail:</labal>
//       <br/>
//       <input  onChange={(event)=> hendelChange(event)}  type="email" name="email" value={email}/>
//       <br/>
//       <labal>password:</labal>
//       <br/>
//       <input onChange={(event)=> hendelChange(event)}  type="password" name="password" value={password}/>
//       <br/>
//       <button type='submit'>Submit</button>
//       </form>
//       {data?.map((item)=>{
//         return(
//           <table>
//           <h2>{item.Name}</h2>
//           <h2>{item.email}</h2>
//           <h2>{item.passoword}</h2>
//           </table>
//         )
//       })}
//     </div>
//   );

// }

// export default App;
