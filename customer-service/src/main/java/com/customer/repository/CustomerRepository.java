package com.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.customer.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
//	@Lock(LockModeType.OPTIMISTIC_FORCE_INCREMENT)
//	   Optional<Customer> findById(Long id);
	//we’re using the @Lock annotation with LockModeType.OPTIMISTIC_FORCE_INCREMENT 
	//to specify that we want to use optimistic locking. We’re also catching the StaleObjectStateException 
	//exception that can occur when a concurrent update is detected.
}
