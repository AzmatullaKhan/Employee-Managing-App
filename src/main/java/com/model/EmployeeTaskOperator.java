package com.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class EmployeeTaskOperator {
	public void addTaskToEmployeee(EmployeeTaskModel etm)throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
				
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "4356");
		
		PreparedStatement psmt=con.prepareStatement("insert into employee_task_data values (?,?,?,?,?,?)");
		psmt.setString(1, etm.getMid());
		psmt.setString(2, etm.getaTaskDescription());
		psmt.setString(3, etm.getaTaskDescription());
		psmt.setInt(4, etm.getaTaskDurationDays());
		psmt.setInt(5, etm.getaTaskDurationHours());
		psmt.setString(6, etm.getEid());
		psmt.execute();
		
		con.close();
	}
}
