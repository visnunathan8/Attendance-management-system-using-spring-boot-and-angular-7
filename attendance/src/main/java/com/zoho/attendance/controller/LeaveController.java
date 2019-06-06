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

import com.zoho.attendance.entity.LeaveDetail;
import com.zoho.attendance.service.LeaveService;

@RestController
@RequestMapping(path = "/leavedetail")
public class LeaveController {

    @Autowired
    LeaveService leaveservice;

    @PostMapping(path = "/adduserleave")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addUser(@RequestBody LeaveDetail leavedetail) {
    	HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    		
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(leaveservice.addLeave(leavedetail));
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
        
    }

    
    @GetMapping(path = "/findalluserleave")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findAllUser() {
HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(leaveservice.findAllUser());
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
        
    }

    
    @GetMapping(path = "/findbyempidleave")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findByEmployeeId(@RequestParam String employeeId) {
HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(leaveservice.findByEmployeeId(employeeId));
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
       
    }

    @GetMapping(path = "/findbydeptidleave")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findByDepartmentId(@RequestParam String deptid) {
HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(leaveservice.findByDepartmentId(deptid));
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
       
    }
    
    @GetMapping(path = "/updateleave")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateLeave(@RequestParam String employeeId,@RequestParam String fromdate,@RequestParam String leavetype) {
HttpHeaders headers = new HttpHeaders();
    	
	    try {  
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(leaveservice.updateLeave(employeeId,fromdate,leavetype));
	    }catch (Exception e) {
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
       
    }
    
    
    @PostMapping(path = "/deleteleave")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> deletebyempid(@RequestParam String empid) {
HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(leaveservice.deleteByEmpid(empid));
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
    }
    
}
