import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

function LogOutBtn() {

  const { getLoggedIn } = useContext(AuthContext);

  async function logOut() {
    await axios.get('https://main--jolly-cendol-a0529c.netlify.app/auth/logout');
    /* await axios.get('http://localhost:5000/auth/logout'); */
    //
    await getLoggedIn();
  }

  return <button onClick={logOut}>Log Out</button>
};

export default LogOutBtn;