package com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.EmployeeModel;
import com.model.EmployeeOperator;

/**
 * Servlet implementation class EmployeeSignup
 */
public class EmployeeSignup extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		EmployeeModel em= new EmployeeModel();
		
		em.setEname(request.getParameter("createEmployee_name"));
		em.setEid(request.getParameter("createEmployee_id"));
		em.setErole(request.getParameter("createEmployee_role"));
		em.setEpassword(em.getErole()+"@"+em.getEid());
		em.setEgender(request.getParameter("gender"));
		em.setEgroup(request.getParameter("createEmployee_group"));
		em.setManagerID(request.getParameter("managerHome_container_one_managerID"));
		EmployeeOperator eo=new EmployeeOperator();
		try {
			eo.addEmployee(em);
			response.sendRedirect("managerHome.jsp");
		} catch (Exception e) {
			// TODO: handle exception
			System.out.print(em.getManagerID());
			response.sendRedirect("managerHome.jsp");
		}
	}

}
