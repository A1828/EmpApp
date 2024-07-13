import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const View = () => {
  var[emp,setemp]=useState([])
  var navigate=useNavigate()
  useEffect(()=>{
  axios.get("http://localhost:3005/view")
  .then((res)=>{
    console.log(res)
    setemp(res.data)
  })
  .catch((err)=>console.log(err))
},[])
const delvalue=(id)=>{
  console.log(id)
  axios.delete("http://localhost:3005/remove/"+id)
  .then((res)=>{
    alert(res.data.message)
    window.location.reload()
  })
  .catch((err)=>console.log(err))
}
const updatevalue=(val)=>{
  console.log("up clicked");
  navigate("/a",{state:{val}});
};
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> Name</TableCell>
                    <TableCell> Age</TableCell>
                    <TableCell> Department</TableCell>
                    <TableCell> Salary</TableCell>
                    </TableRow>
            </TableHead>
            <TableBody> 
              {emp.map((val,i)=>{
                return(
              
        
              <TableRow>
                <TableCell>{val.Name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.Department}</TableCell>
                <TableCell>{val.Salary}</TableCell>
                <TableCell>
                    <Button variant='contained'
                    onClick={()=>{delvalue(val._id)}}
                    >Delete</Button>&nbsp;
                    <Button variant='contained'
                    onClick={()=>{updatevalue(val)}}
                    >Update</Button>
                    </TableCell>
                </TableRow>   
                )})}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default View;
