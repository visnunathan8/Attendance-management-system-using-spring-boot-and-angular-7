package com.zoho.attendance.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zoho.attendance.entity.HolidayDetail;

@Repository
public interface HolidayRepository extends CrudRepository<HolidayDetail, Long> {

    HolidayDetail findByDate(long date);

    @Transactional
    void deleteByDate(long date);

}	