import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Table } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'
import Cardsdata from './CardsData'
import DeleteIcon from '@mui/icons-material/Delete';
import { DLT } from '../redux/actions/Action';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Fotter from './Footer';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Header = () => {

  const [show, setShow] = useState(false);
  const handleCloses= () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [price, setPrice] = useState(0)
  console.log(price);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
   dispatch(DLT(id))
  }
  const total = () =>{
    let price = 0;
    getdata.map((ele,k)=>{
        price= ele.price * ele.qnty+price
    })
    setPrice(price);
}
useEffect(()=>{
  total();
},[total])

  return (
    <>
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: '60px' }}>
        <Container>
          <NavLink to='/' className='text-decoration-none text-light mx-3'>Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to='/' className='text-decoration-none text-light'>Home</NavLink>

            

          </Nav>
          <Button variant="light" style={{marginRight:"20px" }} onClick={handleShow}>Contact</Button>
          <Button variant="light"  style={{marginRight:"20px"}}> <NavLink to='/login' className='text-decoration-none   text-dark' >Login</NavLink></Button>

          <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} >
            <ShoppingCartIcon style={{ color: 'white', fontSize: '30px' }} />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getdata.length ?
              <div className='card_details' style={{ width: '24rem', padding: '10' }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}> <img src={e.imgdata} style={{ width: '5rem', height: '5rem' }} alt='' /></NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price: ₹{e.price}</p>
                                <p>Qnty: {e.qnty}</p>
                              </td>
                              <td className='mt-5' style={{ color: 'red', fontSize: '20', cursor: 'pointer' }}>
                                < DeleteIcon onClick={() => dlt(e.id)} />
                              </td>
                            </tr>

                          </>
                        )
                      })
                    }
                    <p className='text-center'>
                      Total : ₹{price}
                    </p>
                  </tbody>

                </Table>

              </div> :
              <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                < CloseIcon onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} />
                <p style={{ fontSize: 18 }}>Your cart is empty</p>
                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />

              </div>
          }
          </Menu>
          
      </Navbar>
      

      <Modal show={show} onHide={handleCloses}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (

              <form className="form-signinn">
                <h2 className="form-signin-heading">Please login</h2>
                <Field type="text" name="username" className="form-control" placeholder="Username" />
                <ErrorMessage  style ={{color:'red'}} name="username" component="div" className="error" /><br />

                <Field type="email" name="email" className="form-control" placeholder="Email" />
                <ErrorMessage  style ={{color:'red'}} name="email" component="div" className="error" /><br />

                <Field type="password" name="password" className="form-control" placeholder="Password" />
                <ErrorMessage style ={{color:'red'}} name="password" component="div" className="error" /><br />

                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Submit'}
                </button>
              </form>

            )}

          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloses}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    
    
    </>


  )
}

export default Header