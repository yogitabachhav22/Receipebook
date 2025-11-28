import React, {useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import  {Navigate, redirect, useParams} from 'react-router-dom';
import { updateItem } from '../store/updateSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Updatereceipe() {
  const {id}= useParams();
  const navigate=useNavigate()
     const [newreceipe,setNewReceipe]= useState()
         const [counter, setCounter]= useState([
        

         ]);
           const dispatch=useDispatch()

      useEffect(()=>{
        console.log(id)
         axios.get('http://localhost:8000/recipes/'+id)
        .then(res=>{
            let data=res.data
              setNewReceipe(data)
              console.log(data)
             console.log(newreceipe)
          })

      },[])

      const updatedata = (e)=>{
        e.preventDefault();
        dispatch(updateItem([id,newreceipe]))
        navigate('/')
        //  axios.post('http://localhost:8000/recipes', newreceipe)
        // .then((res)=>{
        //    // let data=res.data
        //    // setReceipes(data)
        //     console.log(res.data)
        // })


      }
       const handleClick =(e)=>{
        e.preventDefault()
  setCounter([...counter,<Col sm="9" md='7'>
    {/* <Form.Control type="text"  id='ingredients' placeholder='ingredients' onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/> */}

  </Col>]);
  
            console.log(counter);
  

        
     };
    
    return (

      
        <>   
        <div>
              
         <h1>Update information!</h1> <br/>
    <Form id='registrationForm' onSubmit={updatedata} >
    <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label column sm="2">
           Name
        </Form.Label>
{/* {newreceipe?.ingredents.map((ing)=>{
  return <Col sm="9" md='7'></Col>
})} */}

        <Col sm="10">
         <Form.Control type="text" value={newreceipe?.name} placeholder="Name" onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* <Form.Control type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} /> */}
        </Col>
        <div id="validationServerUser" class="invalid-feedback">Please choose a username</div>
      </Form.Group>
       
      <Form.Group as={Row} className="mb-3" controlId="ingredients">
        <Form.Label column sm="2">
      ingredients
        </Form.Label>
        {/* {newreceipe?.ingredents.map((ing)=>{ */}
{/* return   */}
     <Col sm="10">
     <Form.Control type="text" value={newreceipe?.ingredients} placeholder="ingredients" onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* <Form.Control type="email" placeholder="Enter e-mail id" onChange={(e)=>setEmail(e.target.value)}/> */}
        </Col>
          {/* })} */}

                   {counter?.map((c)=>{
  return c
})} 
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="instructions">
        <Form.Label column sm="2">
      instructions
        </Form.Label>
        <Col sm="10">
        <Form.Control as="textarea" type="instructions" value={newreceipe?.instructions} placeholder="instructions" />
          {/* <Form.Control type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> */}
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="cuisine">
        <Form.Label column sm="2">
            cuisine
        </Form.Label>
      <Col sm="10">
       <Form.Control type="text"  value={newreceipe?.cuisine}  placeholder="cuisine" onChange={(e)=>{setNewReceipe({...newreceipe,[e.target.id]:e.target.value});}}/>
          {/* // <Form.Control type="re-enter password" placeholder="re-enter Password" onChange={(e)=>setRepassword(e.target.value)} /> */}
        </Col> 
   </Form.Group>
      <Col sm="10">
          <Form.Control type="submit" placeholder="submit" />
        </Col>
    
    </Form> 
    </div>

 </>

    )
}

    


export default Updatereceipe