
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
function Addnew() {
    const [newreceipe,setNewReceipe]= useState({
      name:'',
      ingredients:'',
      instructions:'',
      cuisine:'',
    })
    const addnewdata=()=>{
    axios.post('http://localhost:8000/recipes', newreceipe)
        .then((res)=>{
           // let data=res.data
           // setReceipes(data)
            console.log(res.data)
        })

        
      } 
    

    return (
        <div>
              <h1> Registeration Form</h1> <br/>
    <Form id='registrationForm' onSubmit={addnewdata} >
{/* <Form id='registrationForm' onSubmit={(e)=>validate(e)}> */}

       

        <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label column sm="2">
           Name
        </Form.Label>


        <Col sm="10">
         <Form.Control type="text"  placeholder="Name" onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* <Form.Control type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} /> */}
        </Col>
        <div id="validationServerUser" class="invalid-feedback">Please choose a username</div>
      </Form.Group>
       
      <Form.Group as={Row} className="mb-3" controlId="ingredients">
        <Form.Label column sm="2">
      ingredients
        </Form.Label>
        
        <Col sm="10">
         <Form.Control type="ingredients" placeholder="ingredients" onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* <Form.Control type="email" placeholder="Enter e-mail id" onChange={(e)=>setEmail(e.target.value)}/> */}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="instructions">
        <Form.Label column sm="2">
      instructions
        </Form.Label>
        <Col sm="10">
        <Form.Control type="instructions" placeholder="instructions"  onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* <Form.Control type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> */}
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="cuisine">
        <Form.Label column sm="2">
            cuisine
        </Form.Label>
      <Col sm="10">
       <Form.Control type="cuisine" placeholder="cuisine" onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* // <Form.Control type="re-enter password" placeholder="re-enter Password" onChange={(e)=>setRepassword(e.target.value)} /> */}
        </Col> 
   </Form.Group>
      <Col sm="10">
          <Form.Control type="submit" placeholder="submit" />
        </Col>
    
    </Form> 
    {/* <div>
      username : {username} <br/>
      email : {email} <br/> 
      password : {password} <br/>
      repassword : {Repassword}
    </div> */}
        </div>
        
    )
}
export default Addnew

