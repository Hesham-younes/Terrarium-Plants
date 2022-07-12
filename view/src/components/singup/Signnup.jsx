import React from 'react';
import { Link,  } from 'react-router-dom';
import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import '../singup/signupStyle.css'
import Context from '../../context/MyContext';

const Signnup = () => {
  const context = useContext(Context);
  const { type, showPassword, showConfirmPassword , setUsername, setEmail, setPassword,error, loading, passwordRef,confirmPasswordRef,handleEvent,handleRegister} = context
    
  return (
    <section className='signUp'>
      <div className="register">
        <h2>Register</h2>
        <p>Create your new account</p>
        {error && alert(error)}
      </div>
      <form onClick={handleEvent} className='signUpForm'>
        <input type="username"
          name='username'
          id='username'
          required
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)} />
        <input type="email"
          name='email'
          id='email'
          required
          placeholder='example@gmail.com'
          onChange={(e) => setEmail(e.target.value)} />
        <span>
          <input type={type.password ? 'text' : 'password'}
            name="password" id="password"
            placeholder='Password' required
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i onClick={() => showPassword()} className="far fa-eye-slash"></i>
        </span>
        <span>
          <input type={type.confirmPassword ? 'text' : 'password'}
            name='confirmPassword'
            id='confirmPassword'
            placeholder='confirm password'
            ref={confirmPasswordRef}
            required
          />
          <i onClick={() => showConfirmPassword()} className="far fa-eye-slash"></i>
        </span>
        <p className="privacy"><span>By signing you agree to our<br /></span>Terms of use <span>and </span>privacy notice</p>
        <button onClick={handleRegister} className="signUpBtn" type='submit' disabled={loading}>Register</button>
        <h3 className="Login">Dont have an account? <Link to='/'>login</Link></h3>
      </form>
    </section>
  )
};

export default Signnup;
