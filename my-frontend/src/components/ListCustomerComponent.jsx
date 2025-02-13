import React, {useEffect, useState} from 'react'
import { deleteCustomer, listCustomers } from '../services/CustomerService'
import { useNavigate } from 'react-router-dom'

const ListCustomerComponent = () => {

  const [customers, setCustomers] = useState([])

  const navigator = useNavigate()

  useEffect(() => {
    getAllCustomers();
  }, [])
  
  function getAllCustomers() {
    listCustomers().then((res) => {
        const sortedCustomers = res.data.sort((a, b) => a.id - b.id); // Sort by ID or another field
        setCustomers(sortedCustomers);
    }).catch(err => {
        console.error(err);
    })
  }

  function addNewCustomer() {
    navigator('/add-customer')
  }

  function updateCustomer(id) {
    navigator(`/edit-customer/${id}`)
  }

  function removeCustomer(id) {
    console.log(id);
    deleteCustomer(id).then((response) => {
        getAllCustomers();
    }).catch(err => {
        console.error(err);
    });
  }

  return (
    <div className='container'>
        <h2 className='text-center'>Customers</h2>
        <button className='btn btn-primary mb-2' onClick={addNewCustomer}>Add Customer</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Customer Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map(customer => 
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateCustomer(customer.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeCustomer(customer.id)}
                                style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>
                    ) 
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListCustomerComponent