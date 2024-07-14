package com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.EmployeeTaskOperator;


public class EmployeeLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String eid= request.getParameter("employee_id");
		String pass=request.getParameter("employee_password");
		
		EmployeeTaskOperator eto=new EmployeeTaskOperator();
		
		try {
			String password=eto.getPasswordManager(eid);
			if(pass.equals(password)) 
				response.sendRedirect("http://localhost:8180/Employee-Managing-App/employeeHome.html");
			else
				response.sendRedirect("http://localhost:8180/Employee-Managing-App/employeeLogin.html");
				
		} catch (Exception e) {
			response.sendRedirect("http://localhost:8180/Employee-Managing-App/employeeLogin.html");
		}
	
	}

}
