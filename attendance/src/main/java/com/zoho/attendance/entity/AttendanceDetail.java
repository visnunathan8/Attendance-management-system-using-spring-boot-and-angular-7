package com.zoho.attendance.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="attendancedetail")
public class AttendanceDetail{
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
		
		private String employeeId;
		
		private String month;
		
		
		private String date;		
		
		private String departmentId;
		
		private Boolean available;
		
		private String checkin;
		
		private String checkout;
		
		private long attencount;
		
		String shift;
		
		public String getShift() {
			return shift;
		}

		public void setShift(String shift) {
			this.shift = shift;
		}
		public long getAttencount() {
			return attencount;
		}
		public void setAttencount(long attencount) {
			this.attencount = attencount;
		}
		public String getMonth() {
			return month;
		}
		public void setMonth(String month) {
			this.month = month;
		}
		
		public String getCheckin() {
			return checkin;
		}
		public void setCheckin(String checkin) {
			this.checkin = checkin;
		}
		public String getCheckout() {
			return checkout;
		}
		public void setCheckout(String checkout) {
			this.checkout = checkout;
		}
		
		
		public String getEmployeeId() {
			return employeeId;
		}
		public void setEmployeeId(String employeeId) {
			this.employeeId = employeeId;
		}
		
		public String getDepartmentId() {
			return departmentId;
		}
		public void setDepartmentId(String departmentId) {
			this.departmentId = departmentId;
		}
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public Boolean getAvailable() {
			return available;
		}
		public void setAvailable(Boolean available) {
			this.available = available;
		}
		
}