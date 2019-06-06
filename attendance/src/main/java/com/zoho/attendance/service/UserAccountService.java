
package com.zoho.attendance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.zoho.attendance.entity.UserAccount;
import com.zoho.attendance.repository.UserAccountRepository;

@Service("userAccountService")
@ComponentScan("BCryptPasswordEncoder")
public class UserAccountService {

	//private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    private UserAccountRepository userAccountRepository;
	
	@Autowired
    public UserAccountService(UserAccountRepository userAccountRepository) {//,BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userAccountRepository = userAccountRepository; 
       // this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

   
    public String addUser(UserAccount useraccount) {
    	String ret = null;
    	useraccount.setPassword(bCryptPasswordEncoder.encode(useraccount.getPassword()));
    	UserAccount userAccountList = userAccountRepository.findByEmployeeId(useraccount.getEmployeeId());
    	if(userAccountList==null) {
    		userAccountRepository.save(useraccount);
    		ret = "User account has been added, user name = " + useraccount.getEmployeeId();
    	}
        return ret;

    }
    
    
    
    public long CheckUser(String employeeId,String password) {
        UserAccount userAccountList = userAccountRepository.findByEmployeeId(employeeId);
        String pass = bCryptPasswordEncoder.encode(password);
        System.out.println("PASSWORD : "+pass+"===>"+userAccountList.getPassword());
        if(bCryptPasswordEncoder.matches(password, userAccountList.getPassword())) {
        	return 1;
        }
        return 0;
    }

    
    
    public List<UserAccount> findAllUser() {
        List<UserAccount> userAccountList = (List<UserAccount>) userAccountRepository.findAll();
        if (userAccountList != null) {
            return userAccountList;
        }
        return null;
    }

    
    public UserAccount findByEmployeeId(String employeeId) {
        UserAccount userAccountList = userAccountRepository.findByEmployeeId(employeeId);
        if (userAccountList != null) {
           return userAccountList;
        }
        return null;
    }

   
    public String updateUser(UserAccount useraccount) {

        UserAccount userAccountList = userAccountRepository.findByEmployeeId(useraccount.getEmployeeId());

        if (userAccountList != null) {            
        	userAccountList.setEmployeeId(useraccount.getEmployeeId());
        	userAccountList.setPassword(useraccount.getPassword());
            userAccountRepository.save(userAccountList);
            return ("User data update successfully.");            
        }
        return "No record found";
    }
    
}