import React , { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({ email, password }));
    };

  return (
    <div className="wrapper1">
    <form className="form-signin" onSubmit={handleSubmit}>       
      <h2 className="form-signin-heading">Login</h2>
      <input typeName="password" class="form-control" name="email" placeholder="Email" required=""/> <br/>     
      <input typeName="text" class="form-control" name="password" placeholder="password" required="" autofocus="" /><br/>    
      <button className="btn  btn-lg btn-primary btn-block1" type="submit">Login</button>  {''}
      < button className="btn  btn-lg btn-primary btn-block1" > <NavLink to='/signup' style={{color:'white', color: 'white',textDecoration:'none'}}>Signup</NavLink></button>
     
    </form>
  </div>
  )
}

export default Login