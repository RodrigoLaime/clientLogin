import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function LogOutBtn() {

  const { getLoggedIn } = useContext(AuthContext);

  async function logOut() {
    /* await axios.get('https://main--jolly-cendol-a0529c.netlify.app/auth/logout'); */
    await axios.get('http://localhost:5000/auth/logout');
    //
    await getLoggedIn();
  }

  return <Link to={'/'} className='logout-nav nav-text' onClick={logOut}>Log Out</Link>
};

export default LogOutBtn;