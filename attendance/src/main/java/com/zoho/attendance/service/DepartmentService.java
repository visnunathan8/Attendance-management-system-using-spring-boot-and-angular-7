package com.zoho.attendance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.zoho.attendance.entity.DepartmentDetail;
import com.zoho.attendance.repository.DepartmentRepository;

@Service("departmentservice")
public class DepartmentService {
		
		@Autowired
		DepartmentRepository departmentrepository;
			
		public String adddepartment(DepartmentDetail departmentdetail) {
			System.out.println("HELLO"+departmentdetail.getDepartmentId());
			DepartmentDetail deptdetail = departmentrepository.findByDepartmentId(departmentdetail.getDepartmentId());
			if(deptdetail==null) {
			//	System.out.println("VENAM"+deptdetail.getDepartmentId()+departmentdetail.getDepartmentName()+departmentdetail.getNoOfEmployee()+departmentdetail.getManagerId());
				departmentrepository.save(departmentdetail);
			return "Details Have been successfully added.";
			}
			return null;
		}
		
		public List<DepartmentDetail> findalldepartment() {
			 List<DepartmentDetail> departmentList = (List<DepartmentDetail>) departmentrepository.findAll();

		        if (departmentList != null) {
		           return departmentList;
		        }

		       return null;
		}
}
