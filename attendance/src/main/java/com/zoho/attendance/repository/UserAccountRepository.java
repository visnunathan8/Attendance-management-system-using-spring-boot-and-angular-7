package com.zoho.attendance.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zoho.attendance.entity.UserAccount;

@Repository
public interface UserAccountRepository extends CrudRepository<UserAccount, Long> {

   
    
    UserAccount findByEmployeeId(String employeeId);

 
    @Transactional
    void deleteByEmployeeId(String employeeId);

}	