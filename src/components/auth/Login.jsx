import React, { useContext } from 'react'
import { useState } from "react"
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

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

      await axios.post('https://main--earnest-frangipane-f07978.netlify.app/auth/login', loginData);
      /*  await axios.post('http://localhost:5000/auth/login', loginData, {
           withCredentials: true,
       }); */
      //verifica si esta logueado y dirreciona a la ruta 
      await getLoggedIn();
      //y lo redireccionamos al customer
      navigate('/customer')

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Log in to your account</h1>
      <form action="" onSubmit={login}>
        <input
          type="email"
          id="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email} />
        <input
          type="password"
          id="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Login