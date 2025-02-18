package com.customer.controller;

import com.customer.entity.Customer;
import com.customer.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import com.customer.service.CustService;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "http://react-springboot-bucket.s3-website-us-east-1.amazonaws.com/")
@RestController
public class CustomerController {
	
	@Autowired
	private CustService custService;

	@Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/v1/test-db")
    public String testDbConnection() {
        try {
            jdbcTemplate.execute("SELECT 1");
            return "Database connection is successful!";
        } catch (Exception e) {
            return "Database connection failed: " + e.getMessage();
        }
    }
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
