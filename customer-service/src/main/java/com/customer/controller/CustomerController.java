package com.customer.controller;

import com.customer.entity.Customer;
import com.customer.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.customer.service.CustService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	private CustService custService;

	@GetMapping("/api/v1/customers")
	public ResponseEntity<List<Customer>> getAllCustomers() {
		return ResponseEntity.ok(custService.fetchAllCustomers());
	}

	@GetMapping("/api/v1/customers/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(custService.fetchById(id));
	}

	@PostMapping("/api/v1/customers")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
		return ResponseEntity.ok(custService.createCustomer(customer));
	}

	@PutMapping("/api/v1/customers/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("id") Long id, @RequestBody Customer customer) {
		return ResponseEntity.ok(custService.updateCustomer(id, customer));
	}

	@DeleteMapping("/api/v1/customers/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long id) {
		custService.deleteCustomer(id);
		return ResponseEntity.ok("Customer deleted successfully!!");
	}
}
