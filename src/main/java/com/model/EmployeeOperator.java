package com.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class EmployeeOperator {
	
	public void addEmployee(EmployeeModel em) throws Exception{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "4356");
		
		PreparedStatement psmt=con.prepareStatement("insert into employee_data values (?,?,?,?,?,?)");
		psmt.setString(1, em.getEname());
		psmt.setString(2, em.getEid());
		psmt.setString(3, em.getEpassword());
		psmt.setString(4, em.getErole());
		psmt.setString(5, em.getEgender());
		psmt.setString(6, em.getEgroup());
		
		psmt.execute();
		
		con.close();
	}
		
}
