import React, { useEffect, useState } from 'react'
import { createCustomer, getCustomer, updateCustomer } from '../services/CustomerService'
import { useNavigate, useParams } from 'react-router-dom'

const CustomerComponent = () => {

   const [name, setName] =  useState('')
   const [email, setEmail] =  useState('')
   const [address, setAddress] =  useState('')

   const {id} = useParams();

   const [errors, setErrors] = useState({
    name: '', 
    email: '',
    address: ''
    })

   const navigator = useNavigate();

   useEffect(() => {
    if(id) {
        getCustomer(id).then((response) => {
            setName(response.data.name)
            setEmail(response.data.email)
            setAddress(response.data.address)
        }).catch(error => {
            console.error(error)
        })
    }
   }, [id])
   
    //const handleName = (e) => { setName(e.target.value) }
   // const handleEmail = (e) => { setEmail(e.target.value) }
    //const handleAddress = (e) => { setAddress(e.target.value) }
    
    function saveOrUpdateCustomer(e) {
        e.preventDefault();
        
        if(validateForm()) {
            const customer = {name, email, address};
            console.log(customer);

            if(id) {
                updateCustomer(id, customer).then((response) => {
                    console.log(response.data);
                    // setCustomers((prevCustomers) =>
                    //     prevCustomers.map((c) => (c.id === id ? response.data : c))
                    // ); // Update only the changed record
                    navigator('/customers');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createCustomer(customer).then(response => {
                    console.log(response.data);
                    navigator('/customers');
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {... errors}
        if(name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }
        if(email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }
        if(address.trim()) {
            errorsCopy.address = '';
        } else {
            errorsCopy.address = 'Address is required';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if(id) {
            return <h2 className="text-center">Update Customer</h2>
        } else {
            return <h2 className="text-center">Add Customer</h2>
        }
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">Name:</label>
                            <input type='text' 
                                placeholder='Enter Customer name' 
                                name='name' value={name} 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                onChange={(e) => setName(e.target.value) }>
                            </input>
                            {errors.name && <div className='invalid-feedback'> {errors.name} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Email:</label>
                            <input type='text' 
                                placeholder='Enter Email' 
                                name='email' value={email} 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value) }>
                            </input>
                            {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Address:</label>
                            <input type='text' 
                                placeholder='Enter Address' 
                                name='address' value={address} 
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                onChange={(e) => setAddress(e.target.value) }>
                            </input>
                            {errors.address && <div className='invalid-feedback'> {errors.address} </div>}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateCustomer}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CustomerComponent