package com.zoho.attendance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.zoho.attendance.entity.AttendanceDetail;
import com.zoho.attendance.repository.AttendanceRepository;

@Service("attendanceservice")
public class AttendanceService {

	
	private AttendanceRepository attendancerepository;
	
	@Autowired
	public AttendanceService(AttendanceRepository attendancerepository) {
		super();
		this.attendancerepository = attendancerepository;
	}

	public String addUser(AttendanceDetail attendancedetail) {
    	
    		attendancerepository.save(attendancedetail);
	        return "User account has been added, Employee ID = " + attendancedetail.getEmployeeId();
	     

	    }
	 
	    public List<AttendanceDetail> findAllUser() {
	        List<AttendanceDetail> attendanceList = (List<AttendanceDetail>) attendancerepository.findAll();

	        if (attendanceList != null) {
	        	return attendanceList;
	        }
	        return null;
	    }

	    public AttendanceDetail[] findByempid(String employeeid) {
		AttendanceDetail[] attendanceList =  attendancerepository.findByEmployeeId(employeeid);

	        if (attendanceList != null) {
	            return attendanceList;
	        }
	        return null;
	  }
	    
	    
	    public long countByEmployeeIdAndDepartmentId(String employeeid,String departmentid) {
			long attendanceList =  attendancerepository.countByEmployeeIdAndDepartmentId(employeeid,departmentid);
		            return attendanceList;
		        
		  }
	    
	    public long countByDepartmentIdAndMonthAndAvailable(String departmentid,String month,Boolean available) {
			long attendanceList =  attendancerepository.countByDepartmentIdAndMonthAndAvailable(departmentid,month,available);
		            return attendanceList;
		        
		  }
	    public long countByDepartmentIdAndMonth(String departmentid,String month) {
			long attendanceList =  attendancerepository.countByDepartmentIdAndMonth(departmentid,month);
		            return attendanceList;
		        
		  }
	    public long countByEmployeeIdAndDepartmentIdAndMonth(String employeeid,String departmentid,String month) {
			long attendanceList =  attendancerepository.countByEmployeeIdAndDepartmentIdAndMonth(employeeid,departmentid,month);
		            return attendanceList;
		        
		  }
	    
	    public long countByEmployeeIdAndDepartmentIdAndAvailable(String employeeid,String departmentid,Boolean available) {
			long attendanceList =  attendancerepository.countByEmployeeIdAndDepartmentIdAndAvailable(employeeid,departmentid,available);
		            return attendanceList;
		        
		  }
	    
	    public AttendanceDetail findBydate(String month) {
			AttendanceDetail attendanceList = (AttendanceDetail) attendancerepository.findBydate(month);

		        if (attendanceList != null) {
		            return attendanceList;
		        }
		        return null;
		  }
	    
	    public AttendanceDetail[] findBydeptid(String departmentid) {
		   AttendanceDetail[] attendanceList = (AttendanceDetail[]) attendancerepository.findByDepartmentId(departmentid);
	        if (attendanceList != null) {
	        		return attendanceList;
	        }
	        return null;
	  }

	    public AttendanceDetail findByName(String employeeid,String departmentid) {
		 AttendanceDetail attendanceList = (AttendanceDetail) attendancerepository.findByEmployeeIdAndDepartmentId(employeeid, departmentid);

	        if (attendanceList != null) {
	           return attendanceList;
	        }

	        return null;
	  }

	    
	    
	    
	    
	    

	    public Object[] sortdeptview(String departmentid,String month,String shift) {
//						AttendanceDetail[] attendanceList = (AttendanceDetail[]) 
//								attendancerepository.findByDepartmentId(departmentid);
//		
//			for(AttendanceDetail atten : attendanceList) {
//				atten.setAttencount(countByDepartmentIdAndMonth(departmentid,month));
//			}
			return attendancerepository.findByAttencountOrderByAttencountAsc(departmentid,month,shift);
	    
	    }
	    
	    
	    
	    
	    
	    
	    
	    public String updateUser(String employeeid,Boolean available,String date) {
	    	AttendanceDetail attendanceList = (AttendanceDetail) attendancerepository.findByEmployeeIdAndDate(employeeid,date);
	    	if (attendanceList != null) {
	        	
	        	attendanceList.setAvailable(available);
	        	attendancerepository.save(attendanceList);
	        	return "User updated Successfully";
	        }
	        return "User update Failed";
	    }


	    public String deleteByEmpid(String employeeid) {
	    	attendancerepository.deleteByEmployeeId(employeeid);
	        return "Record deleted successfully";
	    }

	    public String deleteBydeptid(String departmentid) {
	    	attendancerepository.deleteByDepartmentId(departmentid);
	       return "Record deleted successfully";
	    }
	   
	    
	    public String deleteByUserNameAndPassword(String employeeid,String departmentid) {
	    	attendancerepository.deleteByEmployeeIdAndDepartmentId(employeeid,departmentid);
	    	return "Record deleted successfully";
	    }
}
