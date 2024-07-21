package com.model;
import java.sql.*;

public class EmailOperator {
	public void addEmail(EmailModel em)throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		
		Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","4356");
		
		PreparedStatement psmt= con.prepareStatement("insert into employee_meeting values(?,?,?,?,?)");
		psmt.setString(1, em.getMid());
		psmt.setString(2, em.getMemail());
		psmt.setString(3, em.getGroupId());
		psmt.setString(4, em.getSubject());
		psmt.setString(5, em.getContext());
		
		psmt.execute();
		
		con.close();
	}
}
