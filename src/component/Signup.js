import React , { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { signup } from '../redux/actions/authAction'

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(signup({ username, email, password }));
    };
  return (
   
    <div className="wrapper1">
    <form className="form-signin" onSubmit={handleSubmit}>       
      <h2 className="form-signin-heading">Signup</h2>
      <input typeName="password" class="form-control" name="Username" placeholder="username" required=""/> <br/>   
      <input typeName="password" class="form-control" name="email" placeholder="Email" required=""/> <br/>     
      <input typeName="text" class="form-control" name="password" placeholder="password" required="" autofocus="" /><br/>    
      <button className="btn  btn-lg btn-primary btn-block1" type="submit">Signup</button>  
      
     
    </form>
  </div>
  )
}

export default Signup