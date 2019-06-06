package com.zoho.attendance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="departmentdetail")
public class DepartmentDetail {
	@Id
	@Column(name = "departmentid")
	String departmentId;
	
	@Column(name = "departmentName")
	String departmentName;
	
	@Column(name = "noofEmployee")
	String noOfEmployee;
	
	@Column(name = "managerid")
	String managerId;

	public String getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(String departmentId) {
		this.departmentId = departmentId;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getNoOfEmployee() {
		return noOfEmployee;
	}
	public void setNoOfEmployee(String noOfEmployee) {
		this.noOfEmployee = noOfEmployee;
	}
	public String getManagerId() {
		return managerId;
	}
	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}
	
}
