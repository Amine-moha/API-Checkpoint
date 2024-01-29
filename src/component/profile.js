import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
     const user=useSelector(state=>state.user)
     console.log(user)
  return (
    <div>
   <img src={user.image}/>
   <h1>
    {user.name}
   </h1>
    </div>
  )
}

export default Profile