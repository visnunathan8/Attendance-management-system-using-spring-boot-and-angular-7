
package com.zoho.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zoho.attendance.entity.UserAccount;
//import com.zoho.attendance.repository.UserAccountRepository;
import com.zoho.attendance.service.UserAccountService;

@RestController
@RequestMapping(path = "/userAccount")
public class UserAccountController {

    @Autowired
    UserAccountService userAccountService;

//    @Autowired
//    UserAccountRepository us;
//    
//    
//    
//    
//    
//    @PostMapping("/add")
//    @CrossOrigin
//    public ResponseEntity<?> saveDealData(@RequestBody UserAccount useraccount) {
//    HttpHeaders headers = new HttpHeaders();
//
//    try {
//    us.save(useraccount);
//    //headers.add("Message", "true");	
//    return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(useraccount);
//    }
//    catch(Exception e) {
//
//    }
//    headers.add("Message", "false");
//    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
//    }
//    
    
    

    @GetMapping(path = "/checkuser")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> Checkuser(@RequestParam String employeeId,@RequestParam String password) {
    	HttpHeaders headers = new HttpHeaders();
        
        try {
        	
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(userAccountService.CheckUser(employeeId,password));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    }
    
    
    
    
    
    @PostMapping(path = "/adduseraccount")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addUser(@RequestBody UserAccount useraccount) {
    	HttpHeaders headers = new HttpHeaders();
    	
    	    try {
    	    		userAccountService.addUser(useraccount);
    	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(useraccount);
    	    }catch (Exception e) {
				// TODO: handle exception
    	    	headers.add("Message", "false");
    	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
			}
    }

    @GetMapping(path = "/findalluseraccounts")
    @CrossOrigin    
    @ResponseBody
    public ResponseEntity<?> findAllUser() {
    	HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    		
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(userAccountService.findAllUser());
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
       
    }


    @GetMapping(path = "/findbyempid")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findByEmployeeId(@RequestParam String employeeId) {
    	HttpHeaders headers = new HttpHeaders();
        
        try {
        	
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(userAccountService.findByEmployeeId(employeeId));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    }

    @PostMapping(path = "/updateuser")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateUser(@RequestBody UserAccount useraccount) {
HttpHeaders headers = new HttpHeaders();
        
        try {
        	
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(userAccountService.updateUser(useraccount));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    	
    }
    
}