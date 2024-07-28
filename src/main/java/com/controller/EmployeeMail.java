package com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.EmployeeEmail;
import com.model.EmployeeEmailOperator;

public class EmployeeMail extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String mid=request.getParameter("overview_mid");
		String eid=request.getParameter("overview_employee_id");
		String esubject=request.getParameter("overview_employee_subject");
		String econtext=request.getParameter("overview_employee_context");
		
		EmployeeEmail ee=new EmployeeEmail();
		ee.setEid(eid);
		ee.setEcontext(econtext);
		ee.setEsubject(esubject);
		ee.setMid(mid);
		
		EmployeeEmailOperator emo=new EmployeeEmailOperator();
		try {
			emo.addEmployeeEmail(ee);
			response.sendRedirect("employeeHome.html");
		} catch (Exception e) {
			// TODO: handle exception
			response.sendRedirect("employeeHome.html");
		}
	}

}
