package com.customer.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.customer.entity.Customer;
import com.customer.exception.ResourceNotFoundException;
import com.customer.repository.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
public class CustService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public List<Customer> fetchAllCustomers() {
		return (List<Customer>) customerRepository.findAll();
	}
	public Customer fetchById(Long id) {
		//return customerRepository.findById(id).get();
		return customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer with ID " + id + " not found"));
	}
	public Customer createCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
//	public Customer updateCustomer(Customer customer) {
//		return customerRepository.save(customer);
//	}
	public Customer updateCustomer(Long id, Customer updatedCustomer) {
		Customer customer = customerRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Customer with ID " + id + " not found"));
		
		customer.setName(updatedCustomer.getName());
		customer.setAddress(updatedCustomer.getAddress());
		customer.setEmail(updatedCustomer.getEmail());
		
		return customerRepository.save(customer);
	}
	public void deleteCustomer(Long id) {
		Customer customer = customerRepository.findById(id)
		        .orElseThrow(() -> new ResourceNotFoundException("Customer with ID " + id + " not found"));
//		customerRepository.deleteById(id);
		customerRepository.delete(customer);
//		return "Customer " + customer.getId() + " is deleted successfully" ;
	}
}
