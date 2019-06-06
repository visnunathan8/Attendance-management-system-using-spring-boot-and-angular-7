package com.zoho.attendance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="employeedetail")
public class EmployeeDetail {
		
		@Id
		@Column(name = "employeeId")
		String employeeId;
		
		@Column(name = "dob")
		long dob;
		
		@Column(name = "gender")
		String gender;
		
		@Column(name = "bloodgroup")
		String bloodGroup;
		
		@Column(name = "phno")
		long phno;
		
		@Column(name = "address")
		String address;
		
		@Column(name = "department")
		String department;
		
		@Column(name = "mailid")
		String mailId;
		
		@Column(name = "firstname")
		String firstName;
		
		@Column(name = "lastname")
		String lastName;
		
		@Column(name = "dateofjoining")
		long dateOfJoining;
		
		@Column(name = "salary")
		long salary;

		String shift;
		
		public String getShift() {
			return shift;
		}

		public void setShift(String shift) {
			this.shift = shift;
		}

		public String getEmployeeId() {
			return employeeId;
		}

		public void setEmployeeId(String employeeId) {
			this.employeeId = employeeId;
		}

		public long getDob() {
			return dob;
		}

		public void setDob(long dob) {
			this.dob = dob;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public String getBloodGroup() {
			return bloodGroup;
		}

		public void setBloodGroup(String bloodGroup) {
			this.bloodGroup = bloodGroup;
		}

		public long getPhno() {
			return phno;
		}

		public void setPhno(long phno) {
			this.phno = phno;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getDepartment() {
			return department;
		}

		public void setDepartment(String department) {
			this.department = department;
		}

		public String getMailId() {
			return mailId;
		}

		public void setMailId(String mailId) {
			this.mailId = mailId;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public long getDateOfJoining() {
			return dateOfJoining;
		}

		public void setDateOfJoining(long dateOfJoining) {
			this.dateOfJoining = dateOfJoining;
		}

		public long getSalary() {
			return salary;
		}

		public void setSalary(long salary) {
			this.salary = salary;
		}
}
