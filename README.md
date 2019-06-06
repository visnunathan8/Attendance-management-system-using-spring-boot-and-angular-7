# Attendance-management-system

The main motive of the project is to create an end to end attendance management system for the company,following are the key features of this project :-
1. Dedicated views for EMPLOYEES,ADMIN,DEPARTMENT as well
2. EMPLOYEE VIEW :-
  * ATTENDANCE ANALYSIS 
  * EMPLOYEE DETAILS
  * LEAVE REQUEST SUBMISSION (will be approved by the admin.!)
  * NOTIFICATION CENTER (to view the status of the leave requested)
  * HOLIDAY LIST (company specific holidays)
3. DEPARTMENT VIEW :-
  * ENTIRE DETAILS OF THE EMPLOYEES IN THAT PARTICULAR DEPARTMENT ALONG WITH THEIR ATTENDANCE WILL BE DISPLAYED IN THE DESCENDING ORDER(in terms of no of days present)
  * LEAVE APPROVAL FACILTY 
  * HOLIDAY LIST (company specific holidays)
4. ADMIN VIEW
  * ENTIRE DETAILS OF THE EMPLOYEES ALONG WITH THEIR ATTENDANCE WILL BE DISPLAYED DEPARTMENT WISE IN THE DESCENDING ORDER(in terms of no of days present)
  * HOLIDAY LIST (company specific holidays)
  
  
  -------------------------------------------------------------------------------
  
  TECHNOLOGIES USED,
  
  FRONT END :- Angular7
  BACK END :- Spring Boot (using CRUD REPOSITORIES ) 
  DATABASE :- MySql
  OS :- Linux (ubuntu)
  
  -------------------------------------------------------------------------------
  
  SYSTEM REQUIREMENTS,
  Java 8,MySQL (suitable version),Node JS,eclipse ide, Maven tool
  
  
  --------------------------------------------------------------------------------
  
  How to run the application 
  
  FRONT END :-
    Install npm 
    Go inside the folder named 'Attendance System' in terminal and type the following command
                            'npm install'  
    give 'npm start'
    
    
 BACK END :- 
    Right click on the project -> Select 'maven' -> Select 'Update Project'
    Right click on the POM.XML -> Select 'run as' -> Select 'Maven Build'
    Under the target folder -> Find the path of the snapshot.jar file 
    In the terminal give the following command :-
        java -jar 'path of the jar'
      For eg : java -jar /home/test/Downloads/attendance/target/attendance-0.0.1-SNAPSHOT.jar
    
