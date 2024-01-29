import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/action';

function Adduser() {
  const [show, setShow] = useState(false);
 const [name,setname]=useState("")
 const [email,setemail]=useState("")
 const [image,setimage]=useState("")
 const [password,setpassword]=useState("")
 const [gender,setgender]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const dispatch=useDispatch()


 const add=()=>{
    dispatch(adduser({name,image,password,email,gender}))
    handleClose()
 }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add user
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
              onChange={(e)=>setemail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
               onChange={(e)=>setname(e.target.value)}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setimage(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>gender</Form.Label>
              <Form.Control
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
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Adduser;