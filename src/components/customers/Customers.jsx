import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'
import axios from 'axios';

function Customers() {
  //////obtener de la db
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customerRes = await axios.get('https://loginmongoserver1.onrender.com/customer/');
    /* const customerRes = await axios.get('http://localhost:5000/customer/'); */
    // guardamos los valores
    setCustomers(customerRes.data);
  }
  useEffect(() => {
    getCustomers();
  }, [])

  return (
    <div className='Customer'>
      <div className='container-customer'>
        <h1>Customers</h1>
        <CustomerForm getCustomers={getCustomers} />
        <CustomerList customers={customers} />
      </div>
    </div>
  )
}

export default Customers