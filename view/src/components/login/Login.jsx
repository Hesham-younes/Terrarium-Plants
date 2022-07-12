import React from 'react';
import {Link} from 'react-router-dom'
import Context from '../../context/MyContext';
import { Alert } from 'react-bootstrap';
import {useContext } from 'react'
import '../login/loginStyle.css'
const Login = () => {
  const context = useContext(Context);
  const {type,showPassword,handleEvent,loginHandle,setEmail,setPassword,error} = context
 return (
    <>
      <form className="loginForm" onSubmit={handleEvent}>
      <div className="formGrupp">
      <div className='formBg'></div>
      <h2>Welcome to Plants Market</h2>
        <p>login to your account</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <input type="email" name="email" placeholder='Email address' 
        className='Email' required
        onChange={(e)=> setEmail(e.target.value)}/>
      <span>
        <input type={type.password ? 'text' : 'password'}
        className="passwordLogin" id="password" 
        placeholder='Password'  required autoComplete="off"
        onChange={(e)=> setPassword(e.target.value)}/>
        <i onClick={()=>showPassword()} className="far fa-eye-slash login"></i>
       </span>
       <div className="checkRemember">
        <Link to ='/forget-password'>forget password?</Link>
        <button onClick={loginHandle} type='submit' className="loginBtn">login</button>
        <h5>Don't have an account?<span><Link to='/signup'>Sign up</Link></span></h5>
        </div>
        </div>
      </form>
    </>
  )
};

export default Login;
