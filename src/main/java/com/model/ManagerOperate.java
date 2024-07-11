package com.model;
import java.sql.*;
public class ManagerOperate {
	
	public void addManager(ManagerModel mm) throws Exception{
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "4356");
		
		PreparedStatement psmt=con.prepareStatement("insert into manager_data values (?,?,?,?,?,?)");
		psmt.setString(1,mm.getMid());
		psmt.setString(2, mm.getMname());
		psmt.setString(3, mm.getMcompanyName());
		psmt.setString(4, mm.getMrole());
		psmt.setString(5, mm.getMgmail());
		psmt.setString(6, mm.getMpassword());
		psmt.execute();
		
		con.close();
		
		
	}
	
}
