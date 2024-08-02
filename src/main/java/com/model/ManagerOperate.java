package com.model;
import java.sql.*;
public class ManagerOperate {
	
	public void addManager(ManagerModel mm) throws Exception{
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "4356");
		
		Statement stmt= con.createStatement();
		
		stmt.execute("DECLARE"
			    + "   table_count NUMBER;"
			    + "BEGIN"
			    + "   SELECT COUNT(*)"
			    + "   INTO table_count"
			    + "   FROM user_tables"
			    + "   WHERE table_name = 'MANAGER_DATA';"
			    + "   IF table_count = 0 THEN"
			    + "      EXECUTE IMMEDIATE '"
			    + "         CREATE TABLE manager_data ("
			    + "            mid       VARCHAR2(200) PRIMARY KEY,"
			    + "            mname     VARCHAR2(200),"
			    + "            mcompanyname VARCHAR2(200),"
			    + "            mrole     VARCHAR2(200),"
			    + "            mmail     VARCHAR2(100),"
			    + "            mpassword VARCHAR2(200)"
			    + "         )"
			    + "      ';"
			    + "   END IF;"
			    + "END;"
			);

			stmt.execute("DECLARE"
			    + "   table_count NUMBER;"
			    + "BEGIN"
			    + "   SELECT COUNT(*)"
			    + "   INTO table_count"
			    + "   FROM user_tables"
			    + "   WHERE table_name = 'EMPLOYEE_DATA';"
			    + "   IF table_count = 0 THEN"
			    + "      EXECUTE IMMEDIATE '"
			    + "         CREATE TABLE employee_data ("
			    + "            ename     VARCHAR2(200),"
			    + "            eid       VARCHAR2(200) UNIQUE,"
			    + "            epassword VARCHAR2(200),"
			    + "            erole     VARCHAR2(200),"
			    + "            egender   VARCHAR2(100),"
			    + "            egroup    VARCHAR2(200),"
			    + "            mid       VARCHAR2(200)"
			    + "         )"
			    + "      ';"
			    + "   END IF;"
			    + "END;"
			);

			stmt.execute("DECLARE"
			    + "   table_count NUMBER;"
			    + "BEGIN"
			    + "   SELECT COUNT(*)"
			    + "   INTO table_count"
			    + "   FROM user_tables"
			    + "   WHERE table_name = 'EMPLOYEE_MAILS';"
			    + "   IF table_count = 0 THEN"
			    + "      EXECUTE IMMEDIATE '"
			    + "         CREATE TABLE employee_mails ("
			    + "            eid       VARCHAR2(200),"
			    + "            mid       VARCHAR2(200),"
			    + "            msubject  VARCHAR2(200),"
			    + "            mcontext  VARCHAR2(200)"
			    + "         )"
			    + "      ';"
			    + "   END IF;"
			    + "END;"
			);

			stmt.execute("DECLARE"
			    + "   table_count NUMBER;"
			    + "BEGIN"
			    + "   SELECT COUNT(*)"
			    + "   INTO table_count"
			    + "   FROM user_tables"
			    + "   WHERE table_name = 'EMPLOYEE_MEETING';"
			    + "   IF table_count = 0 THEN"
			    + "      EXECUTE IMMEDIATE '"
			    + "         CREATE TABLE employee_meeting ("
			    + "            mid       VARCHAR2(200),"
			    + "            memail    VARCHAR2(200),"
			    + "            groupid   VARCHAR2(200),"
			    + "            subject   VARCHAR2(200),"
			    + "            context   VARCHAR2(200)"
			    + "         )"
			    + "      ';"
			    + "   END IF;"
			    + "END;"
			);

			stmt.execute("DECLARE"
			    + "   table_count NUMBER;"
			    + "BEGIN"
			    + "   SELECT COUNT(*)"
			    + "   INTO table_count"
			    + "   FROM user_tables"
			    + "   WHERE table_name = 'EMPLOYEE_TASK_DATA';"
			    + "   IF table_count = 0 THEN"
			    + "      EXECUTE IMMEDIATE '"
			    + "         CREATE TABLE employee_task_data ("
			    + "            mid               VARCHAR2(200),"
			    + "            taskhead          VARCHAR2(200),"
			    + "            taskdescription   VARCHAR2(200),"
			    + "            taskdays          NUMBER,"
			    + "            taskhours         NUMBER,"
			    + "            eid               VARCHAR2(200)"
			    + "         )"
			    + "      ';"
			    + "   END IF;"
			    + "END;"
			);

		
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
	
	public String getPasswordManager(String mid) throws Exception{
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "4356");
		
		Statement stmt = con.createStatement();
		
		ResultSet rs= stmt.executeQuery("select * from manager_data where mid = "+mid+" ");
		
		if(rs.next())
			return rs.getString(6);
		
		return null;
		
	}
	
}
