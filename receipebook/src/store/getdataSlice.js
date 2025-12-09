// import { createSlice, createAsyncThunk, isPending } from "@reduxjs/toolkit"
// import axios from "axios";
//import {Collection, MongoClient} from 'mongodb'


// export const fetchdata=createAsyncThunk("fetchdata", async ()=>{
// let uri= "mongodb+srv://Yogita:3ZC5peMv7fCKRMGW@cluster0.pjcnqgf.mongodb.net/?appName=Cluster0"
   

//   const client=new MongoClient(uri)
//   try{
//     await client.connect();
//     const db=client.db('Users')
//     const  mycollection =db.collection('users')
//     const mydbdata=await mycollection.find().toArray()
//     console.log(mydbdata)
//   }finally{
// await client.close()
//   }
//        let data =  axios.get('http://localhost:8000/recipes')
// axios.get('http://localhost:8000/recipes')
//         .then(res=>{
//             let data=res.data
//            return data
//         })
//        return data
  
//   })

// export const fetchdataSlice=createSlice({
//     name:'getdata',
//     initialState:{
//         receipes:[],
//         isError:false,
//         isDataLoaded:false,
//         isPending:false

//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchdata.pending,(state)=>{
//             console.log('DATA LOADING...')
//             state.isPending=true

//         })
//         builder.addCase(fetchdata.rejected,(state,action)=>{
//            state.isError=true;
//            console.error('Something went wrong' + action.payload)
//             state.isPending=false       
//         })
//         builder.addCase(fetchdata.fulfilled,(state,action)=>{
//             state.receipes=action.payload;
//             state.isDataLoaded=true;
//                state.isPending=false     
//         })
       
//     }
// })

// export default fetchdataSlice.reducer

