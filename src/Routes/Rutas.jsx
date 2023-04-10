import React, { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar.jsx';
import Home from '../components/layout/Home.jsx';
import Register from '../components/auth/Register.jsx';
import Login from '../components/auth/Login.jsx';
/* import Customer from '../components/layout/Customer.jsx'; */
import Customer from '../components/customers/Customers.jsx'
import AuthContext from '../context/AuthContext.jsx';

function Rutas() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {loggedIn === false &&
                    <>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </>
                }
                {loggedIn === true &&
                    <>
                        <Route path="/customer" element={<Customer />} />
                    </>
                }
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </Router>
    );
}


export default Rutas