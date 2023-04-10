import React from 'react'

function CustomerList({ customers }) {
    function renderCustomers() {
        return customers.map((customer, i) => {
            return <li key={i}>{customer.name}</li>
        })
    }

    return (
        <div>
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