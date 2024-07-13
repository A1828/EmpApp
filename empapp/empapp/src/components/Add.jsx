import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Add = (props) => {
  var[inputs,setInputs]=useState({Name:"",Age:"",Department:"",Salary:""})
  var navigate =useNavigate()
  var location=useLocation()
  console.log(location.state)

  const inputHandler =(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }
  const AddHandler =()=>{
    if(location.state!==null)
      {
        axios.put("http://localhost:3005/edit/"+location.state.val._id,inputs)
         .then((res)=>{
          console.log(res)
          alert(res.data.message)
          navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    else{
      axios.post("http://localhost:3005/add",inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })}

    }
   
 useEffect(()=>{
  if(location.state !=null){
    setInputs({
      ...inputs,
      Name:location.state.val.Name,
      Age:location.state.val.Age,
      Department:location.state.val.Department,
      Salary:location.state.val.Salary
    })
  }
 },[])

 
  return (
    <div>
      <TextField
      variant="outlined"
      label="Name"
      onChange={inputHandler}
      name="Name"
      value={inputs.Name} />
      <br /><br />
      <TextField
      variant="outlined"
      label="Age"
      name="Age"
      onChange={inputHandler}
      value={inputs.Age}/>
       <br /><br />
      <TextField
      variant="outlined"
      label="Department"
      name="Department"
      onChange={inputHandler}
      value={inputs.Department}/>
      <br /><br />
      <TextField
      variant="outlined"
      label="Salary"
      name="Salary"
      onChange={inputHandler}
      value={inputs.Salary} />
      <br /><br />
      <Button variant="contained" color="secondary" onClick={AddHandler}> SUBMIT</Button>

    </div>
  )
}

export default Add;
