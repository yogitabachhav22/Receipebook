import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
 import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

 import {faArrowCircleLeft, faTrash} from '@fortawesome/free-solid-svg-icons'

  import { fetchdata } from '../store/getdataSlice'
import {deleteItem} from '../store/deleteSlice'
 import {useSelector,useDispatch} from 'react-redux'
 
import './viewall.css'

function Viewall() {

    const data= {

      
            "id":1,
           
            "name":"Pizza",
            "ingredients": [
                "Pizza dough",
                "Tamato sause",
                "olive oil",
                "salt and pepper",
                "chicken"
           
            ],
            "instructions": [

              
                "Pizza dough",
                "Tamato sause",
                "olive oil",
                "salt and pepper"
            ],
            "userId" : 1,
            "image" : "https://cdn.dummyjson.com/recipe-images/1.webp",
            "tags": [
                "Pizza",
                "Italian"

            ],
             "rating":2,
            "meal": [
                ""
            ]
        

    }
    const dispatch=useDispatch()
   // const [receipes, setReceipes]= useState(null)
  
     let receipes=useSelector((state)=>state.getdata.receipes)
     //setReceipes(storedata)
    useEffect(()=>{
        // axios.get('http://localhost:8000/recipes')
        // .then(res=>{
        //     let data=res.data
        //     setReceipes(data)
        //      console.log(receipes)
        // })
       dispatch(fetchdata())
    },[])

    const deletereceipe=(id)=>{
        dispatch(deleteItem(id))
axios.delete('http://localhost:8000/recipes/' + id)
.then((res)=>console.log(res))
document.location.reload()
}

    const addnewdata=()=>{
        //   axios.post('http://localhost:8000/recipes',data)
        // .then((res)=>{
         
        //      setReceipes(res.data)
        //      console.log(res.data)
        // })

    }


    return (
        <>
           <h1>View all receipes</h1> 
           <div class='container-fluid'>
          {receipes?.map((receipe)=>{
            return < Card key={receipe.id} style={{ width: '18rem', margin:'8px' }}>
      <Card.Img variant="top" src={receipe.image} />
      <Card.Body>
        <Card.Title>{receipe.name}</Card.Title>
        <Card.Text>
         {receipe.tags?.map((tag)=>{
            return <Button style={{marginLeft:'6px'}} variant="primary" size="sm">{tag} </Button> 
         })} <br/>
         <h5>ratings:<Badge bg="warning">{receipe.rating}</Badge> </h5>
        </Card.Text>
        <Button variant="warning"><Link to={'/receipedetail/'+receipe.id}>View Instruction</Link></Button>
        <Button  variant="success" onClick={()=>deletereceipe(receipe.id)}>
      <FontAwesomeIcon icon={faTrash}/> </Button>
      </Card.Body>
    </Card>
          })}
          {/* <button onClick={addnewdata}>Add dummy data</button> */}
            </div>
          <Viewall/>   
        
        </>
      
    )
     
}


export default Viewall
