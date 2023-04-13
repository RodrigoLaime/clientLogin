import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import LogOutBtn from '../auth/LogOutBtn';
import '../../css/Navbar.css'

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className='Navbar'>
      <Link className='home-nav nav-text' to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link className='register-nav nav-text' to="/register">Register</Link>
          <Link className='ligin-nav nav-text' to="/login">Log In</Link>
        </>
      )}
      {loggedIn === true &&
        <>
          <Link className='customer-nav nav-text' to="/customer">Customer</Link>
          <LogOutBtn className='logout-nav nav-text' />
        </>
      }
    </div>
  )
}

export default Navbar