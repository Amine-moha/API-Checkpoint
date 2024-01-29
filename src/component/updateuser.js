import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateuser } from '../redux/action';


function Updateuser({user}) {
  const [show, setShow] = useState(false);
 const [name,setname]=useState(user.name)
 const [email,setemail]=useState(user.email)
 const [image,setimage]=useState(user.image)
 const [password,setpassword]=useState(user.password)
 const [gender,setgender]=useState(user.gender)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const dispatch=useDispatch()


 const edit=()=>{
    dispatch(updateuser(user._id,{name,image,password,email,gender}))
    handleClose()
 }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        edit user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              defaultValue={user.email}
              onChange={(e)=>setemail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              defaultValue={user.name}
               onChange={(e)=>setname(e.target.value)}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
              defaultValue={user.password}
                type="password"
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
              defaultValue={user.image}
                type="text"
                onChange={(e)=>setimage(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>gender</Form.Label>
              <Form.Control
              defaultValue={user.gender}
               onChange={(e)=>setgender(e.target.value)}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Updateuser;