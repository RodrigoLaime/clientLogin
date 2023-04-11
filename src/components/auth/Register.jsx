import React from 'react'
import { useState } from "react"
import axios from 'axios';

function Register() {

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

      /*  await axios.post('https://main--earnest-frangipane-f07978.netlify.app/auth/', registerData, {
         withCredentials: true,
       }) */
      await axios.post('https://main--earnest-frangipane-f07978.netlify.app/auth/', registerData, {
        withCredentials: true,
      })
      /* await axios.post('http://localhost:5000/auth/', registerData, {
        withCredentials: true,
      }) */

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form action="" onSubmit={register}>
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
        <input
          type="password"
          id="password"
          placeholder='Verify your password'
          onChange={(e) => setVerifyPass(e.target.value)}
          value={verifyPass} />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register