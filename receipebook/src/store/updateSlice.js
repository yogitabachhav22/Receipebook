// import {createSlice} from '@reduxjs/toolkit'
// import axios from 'axios'
// import {redirect} from 'react-router-dom'
// export const updateSlice=createSlice({

//     name: 'update',
//     initialState:{
//         updatedData:[],
//         isUpdated:false

//     },
//     reducers:{
//         updateItem:async(State,action)=>{
//             // console.log(action.payload[1])
//             // console.log(`http://localhost:8000/recipes/${action.payload[0]}`)
//             let newdata = JSON.stringify(action.payload[1])
//         axios.patch(`http://localhost:8000/recipes/${action.payload[0]}`, newdata)
//         .then((res)=>{
//            // let data=res.data
//            // setReceipes(data)
//             console.log(res.data)
//         })

//         }
//     }

// })

export const {updateItem}=updateSlice.actions
export default updateSlice.reducer