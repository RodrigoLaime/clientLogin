import React, { useContext } from 'react'
import { useState } from "react"
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../../css/Login.css'
import Validation from './Login';

function Login() {

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //para verificar
  const { getLoggedIn } = useContext(AuthContext);


  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      }

      setErrors(Validation(loginData));

     if(errors.email === "" && errors.password === ""){
       /* await axios.post('https://main--jolly-cendol-a0529c.netlify.app/auth/login', loginData); */
       await axios.post('http://localhost:5000/auth/login', loginData, {
        withCredentials: true,
      });
      //verifica si esta logueado 
      await getLoggedIn();
      //y lo redireccionamos al customer
      navigate('/customer')

     }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='LOGIN'>
      <div className='Login'>
        <h1>Log in to your account</h1>
        <div className='container-form'>
          <form onSubmit={login}>
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
            <button className='btn-login' type='submit'>Log In</button>
          </form>
        </div>
        <div className='question-text'>
          <p>New Here? <Link className='register-link' to='/register'>Create an account</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login