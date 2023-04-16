import React from 'react'
import { useState } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/Login.css'
import Validation from './Register';

function Register() {

  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPass, setVerifyPass] = useState('');

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify: verifyPass
      }

      setErrors(Validation(registerData));

      if (errors.email === "" && errors.password === "" && errors.verifyPass) {
        await axios.post('https://loginmongoserver1.onrender.com/auth/', registerData, {
          withCredentials: true,
        })
       /*  await axios.post('http://localhost:5000/auth/', registerData, {
          withCredentials: true,
        }) */
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='REGISTER'>
      <div className='Register'>
        <h1>Register a new account</h1>
        <div className='container-form'>
          <form action="" onSubmit={register}>
            <div className='input-email'>
              <label htmlFor="email">Email</label>
              <input className='email'
                type="email"
                id="email"
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
            <div className='input-password'>
              <label htmlFor="password">Password</label>
              <input className='password'
                type="password"
                id="password"
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </div>
            <div className='input-password'>
              <label htmlFor="password">Password</label>
              <input className='password'
                type="password"
                id="password"
                placeholder='Verify your password'
                onChange={(e) => setVerifyPass(e.target.value)}
                value={verifyPass} />
            </div>
            <button className='btn-register' type='submit'>
              Register
            </button>
          </form>
        </div>
        <div className='question-text'>
          <p>New Here? <Link className='login-link' to='/login'>Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register