import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getone, getuser, removeuser } from '../redux/action'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Updateuser from './updateuser';
import { Link } from 'react-router-dom';

function Userliste() {
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getuser())

    },[])
    const users=useSelector(state=>state.users)
    console.log(users)
  return (
    <div style={{display:"flex"}}>

     {users.map(e=> <Card style={{width:'18rem'}}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
          {e.email}
        </Card.Text>
        <Card.Text>
          {e.gender}
        </Card.Text>
        <Button variant="primary"onClick={()=>dispatch(removeuser(e._id))}>dellete</Button>
        <Updateuser user={e}/>
        <Link to="/profile">
        <Button variant='info' onClick={()=>dispatch(getone(e._id))}>Go To Profile</Button>
        </Link>
       
      </Card.Body>
    </Card>
     )
  }
  



    </div>
  )
}

export default Userliste