import axios from 'axios';
import React, { useState } from 'react'

function CustomerForm({getCustomers}) {

    ///////enviar al db
    const [customerName, setCustomerName] = useState('')

    async function saveCustomer(e){
        e.preventDefault();
        try {
            //creamos el objeco con el valor 
            const customerData = {
                name: customerName
            }
            //enviamos el valor
            await axios.post('http://localhost:5000/customer/', customerData);
            //para llamar a la funcion de get para actualizar la lista una ves añadido un name
            getCustomers()
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <form onSubmit={saveCustomer}>
        <input 
        type="text" 
        placeholder='Customer name'
        onChange={(e)=> {
            setCustomerName(e.target.value)
        }}
        value={customerName} />
        <button type='submit'>Save new customer</button>
    </form>
  )
}

export default CustomerForm