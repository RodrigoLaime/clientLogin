import React from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {

  const [loggedIn, setLoggedIn] = useState(undefined);

  //consulta y valida que si esta autorizado o no 
  async function getLoggedIn() {
     const loggedInRes = await axios.get('https://loginmongoserver1.onrender.com/auth/loggedIn');
    /* const loggedInRes = await axios.get('http://localhost:5000/auth/loggedIn'); */

    setLoggedIn(loggedInRes.data);
  }

  //
  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };