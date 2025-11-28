import React , { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './receipedetails.css'
 import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button'
function Receipedetails() {
     const [receipe,setReceipe]=useState()
    const {id}=useParams();
     console.log(id)
    let baseurl='http://localhost:8000/recipes/'

        useEffect(()=>{
        axios.get(baseurl+id)
        .then(res=>{
            let data=res.data
            setReceipe(data)
             console.log(receipe)
        })
         },receipe)
    return (
        <>        
        <h2>Receipe detail</h2>
         <h2>{receipe?.name}</h2>
        <div className='container-fluid'>
        <div className='image'>
         <img src={receipe?.image}></img>
       
         </div>
         </div>
   
     <Button variant="warning"><Link to={'/updatereceipe/' +id}>Update receipe</Link></Button>  
 </>

    )
 
}

export default Receipedetails
