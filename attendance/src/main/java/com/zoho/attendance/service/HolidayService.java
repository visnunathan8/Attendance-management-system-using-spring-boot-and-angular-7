package com.zoho.attendance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.zoho.attendance.entity.HolidayDetail;
import com.zoho.attendance.repository.HolidayRepository;

@Service("holidayservice")
public class HolidayService {
	
	
	HolidayRepository holidayrepository;
	
	@Autowired
	 public HolidayService(HolidayRepository holidayrepository) {
		this.holidayrepository = holidayrepository;
	}

	public String addUser(HolidayDetail holidaydetail) {
		HolidayDetail holidaydet = (HolidayDetail)holidayrepository.findByDate(holidaydetail.getDate());
		if(holidaydet==null) {
		 System.out.println("HELLO"+holidaydetail.getDate()+"    "+holidaydetail.getReason());
	        holidayrepository.save(holidaydetail);
	        return "Holiday has been added on : " + holidaydetail.getDate();
	    }
		return "DATA ALREADY THERE";
	}
	 
	    public List<HolidayDetail> findAllHoliday() {
	    	List<HolidayDetail> holidaylist = (List<HolidayDetail>) holidayrepository.findAll();
	        if (holidaylist != null) {
	           return holidaylist;
	        }
	        return null;
	    }
	 	

	    public HolidayDetail findByDate(long date) {
	    	HolidayDetail holidaylist = (HolidayDetail) holidayrepository.findByDate(date);

	        if (holidaylist != null) {
	            return holidaylist;
	        }
	        return null;
	    }
	 	

	    public String deleteBydeptid(long date) {
	    	holidayrepository.deleteByDate(date);
	        return "Deleted Successfully";
	    }
	 
}
