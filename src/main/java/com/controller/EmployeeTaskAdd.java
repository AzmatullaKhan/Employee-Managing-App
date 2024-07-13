package com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.EmployeeTaskModel;
import com.model.EmployeeTaskOperator;

public class EmployeeTaskAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		// TODO Auto-generated method stub
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		EmployeeTaskModel etm=new EmployeeTaskModel();
		
		etm.setMid(request.getParameter("managerHome_container_three_sixmanagerID"));
		etm.setaTaskHead(request.getParameter("addTask_taskhead"));
		etm.setaTaskDescription(request.getParameter("addTask_desc"));
		etm.setaTaskDurationDays(Integer.parseInt(request.getParameter("addTask_duration_days")));
		etm.setaTaskDurationHours(Integer.parseInt(request.getParameter("addTask_duration_hours")));
		etm.setEid(request.getParameter("addTask_id"));
		
		EmployeeTaskOperator eto=new EmployeeTaskOperator();
		
		try {
			eto.addTaskToEmployeee(etm);
			response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerHome1.jsp");
		} catch (Exception e) {
			response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerHome1.jsp");
		}
		
	}

}
