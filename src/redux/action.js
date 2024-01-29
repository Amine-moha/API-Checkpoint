import axios from "axios"
import { GET, GETONE } from "./actiontype"


export const getuser=()=>async(dispatch)=>{
try {
    const res=await axios.get("http://192.168.2.14:4556/api/user/get").then(res=>
    dispatch({type:GET,payload:res.data.getuser})
    )
} catch (error) {
    console.log(error)
}
}
export const adduser=(data)=>async(dispatch)=>{
try{
    const res=await axios.post("http://192.168.2.14:4556/api/user/add",data).then(res=>
    dispatch(getuser()))
}catch (error){
    console.log(error)
}
}
export const removeuser=(id)=>async(dispatch)=>{
    try{
        const res=await axios.delete("http://192.168.2.14:4556/api/user/delete/"+id).then (res=>dispatch(getuser()))
    }catch(error){
        console.log(error)
    }
}
export const updateuser=(id,data)=>async(dispatch)=>{
    try{
        const res=await axios.put("http://192.168.2.14:4556/api/user/update/"+id,data).then (res=>dispatch(getuser()))
    }catch(error){
        console.log(error)
    }
}
  export const getone=(id)=>async (dispatch)=>{
    try{
          const res=await axios.get("http://192.168.2.14:4556/api/user/oneuser/"+id).then (res=>dispatch({type:GETONE,payload:res.data.user}))
    }catch(error){
        console.log(error)
    }
  }
