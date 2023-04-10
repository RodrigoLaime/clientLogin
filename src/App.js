import React from "react";
import Rutas from "./Routes/Rutas.jsx";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext.jsx";

//
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Rutas/>
    </AuthContextProvider>
  );
}

export default App;
