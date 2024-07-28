package com.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class EmployeeEmailOperator {
	public void addEmployeeEmail(EmployeeEmail em) throws Exception{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "4356");
		
		PreparedStatement psmt=con.prepareStatement("insert into employee_mails values (?,?,?,?)");
		psmt.setString(1, em.getMid());
		psmt.setString(2, em.getEid());
		psmt.setString(3, em.getEsubject());
		psmt.setString(4, em.getEcontext());

		
		psmt.execute();
		
		con.close();
	}
}
