import React from 'react'
import '../../css/Customer.css'

function CustomerList({ customers }) {
    function renderCustomers() {
        return customers.map((customer, i) => {
            return <li className='customer-li' key={i}>{customer.name}</li>
        })
    }

    return (
        <div className='customer-list'>
            <ul>
              {/*   {customers?.map((e) => (
                    <li key={e._id}>{e.name}</li>
                ))} */}
                     {renderCustomers()}
            </ul>
        </div>
    )
}

export default CustomerList