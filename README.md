# Attendance-management-system

## The main motive of the project is to create an end to end attendance management system for the company,following are the key features of this project :-
### 1. Dedicated views for EMPLOYEES,ADMIN,DEPARTMENT as well
### 2. EMPLOYEE VIEW :-
  * ATTENDANCE ANALYSIS 
  * EMPLOYEE DETAILS
  * LEAVE REQUEST SUBMISSION (will be approved by the admin.!)
  * NOTIFICATION CENTER (to view the status of the leave requested)
  * HOLIDAY LIST (company specific holidays)
### 3. DEPARTMENT VIEW :-
  * ENTIRE DETAILS OF THE EMPLOYEES IN THAT PARTICULAR DEPARTMENT ALONG WITH THEIR ATTENDANCE WILL BE DISPLAYED IN THE DESCENDING ORDER(in terms of no of days present)
  * LEAVE APPROVAL FACILTY 
  * HOLIDAY LIST (company specific holidays)
### 4. ADMIN VIEW
  * ENTIRE DETAILS OF THE EMPLOYEES ALONG WITH THEIR ATTENDANCE WILL BE DISPLAYED DEPARTMENT WISE IN THE DESCENDING ORDER(in terms of no of days present)
  * HOLIDAY LIST (company specific holidays)
  
  
  -------------------------------------------------------------------------------
  
#  TECHNOLOGIES USED,
  
  FRONT END :- Angular7
  BACK END :- Spring Boot (using CRUD REPOSITORIES ) 
  DATABASE :- MySql
  OS :- Linux (ubuntu)
  
  -------------------------------------------------------------------------------
  
#  SYSTEM REQUIREMENTS,
  Java 8,MySQL (suitable version),Node JS,eclipse ide, Maven tool
  
  
  --------------------------------------------------------------------------------
  
  How to run the application 
  
#  FRONT END :-
    Install npm 
    Go inside the folder named 'Attendance System' in terminal and type the following command
                            'npm install'  
    give 'npm start'
    
    
# BACK END :- 
    Right click on the project -> Select 'maven' -> Select 'Update Project'
    Right click on the POM.XML -> Select 'run as' -> Select 'Maven Build'
    Under the target folder -> Find the path of the snapshot.jar file 
    In the terminal give the following command :-
        java -jar 'path of the jar'
      For eg : java -jar /home/test/Downloads/attendance/target/attendance-0.0.1-SNAPSHOT.jar
    
# SECURITY :-
    We have encoded the password using bCryptPasswordEncoder 
    
# Create an account for all three views
## 1. emp -> to access employee view.
## 2. dept -> to access department view.
## 3. admin -> to access admin view.

## Always use postman to create the account as the passwords are encrypted.
#### Request : http://localhost:8081/userAccount/adduseraccount/
#### Response : {
####    "type": "3",
####    "password": "$2a$10$HO8J7fP1Mn7jn7hmqTog0OhJn/acvqlQ7yP12LavPVFlKBmRH2BTG",
####    "employeeId": "admin"
#### }

<img width="874" alt="Screenshot 2022-12-11 at 10 30 12 PM" src="https://user-images.githubusercontent.com/30067377/206954611-52fa2df9-3c48-4e83-8d84-c5081ec608cb.png">




# LOGIN PAGE   
<img width="1792" alt="Screenshot 2022-12-11 at 10 10 38 PM" src="https://user-images.githubusercontent.com/30067377/206952645-3f55c23f-ac05-4642-aa4a-23bebba0e25d.png">

# ADMIN VIEW
## MAIN PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 30 47 PM" src="https://user-images.githubusercontent.com/30067377/206954674-b9216bd7-94ea-4e93-93c5-23880a43c71b.png">

## ATTENDANCE PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 31 13 PM" src="https://user-images.githubusercontent.com/30067377/206954719-8e300b3b-a7f6-4572-977f-6814046be192.png">

## EMPLOYEES LIST PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 31 58 PM" src="https://user-images.githubusercontent.com/30067377/206954799-e366d305-53d7-448d-bda3-9ddc5fc788fe.png">

## HOLIDAYS LIST PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 32 09 PM" src="https://user-images.githubusercontent.com/30067377/206954813-05a8f804-6a08-4ecc-8ab2-ea956b49c027.png">

# EMPLOYEE VIEW

## DETAILS PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 32 55 PM" src="https://user-images.githubusercontent.com/30067377/206954896-3e85a33a-d3f2-40cb-827e-609b03be6756.png">

## LEAVE REQUEST PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 33 36 PM" src="https://user-images.githubusercontent.com/30067377/206954970-ec8cfdad-8e92-452b-9a29-155cb64a20c9.png">

# DEPARTMENT VIEW

## LEAVE APPROVAL PAGE
<img width="1792" alt="Screenshot 2022-12-11 at 10 34 19 PM" src="https://user-images.githubusercontent.com/30067377/206955026-960bfdcb-8f46-43f2-b6bf-91479eb13f19.png">
