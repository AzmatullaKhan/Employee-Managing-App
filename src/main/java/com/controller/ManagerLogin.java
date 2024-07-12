package com.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.ManagerOperate;

public class ManagerLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String mid= request.getParameter("manager_user_id");
		String pass= request.getParameter("manager_email_password");
		
		ManagerOperate mo= new ManagerOperate();
		
		try {
			String passSaved = mo.getPasswordManager(mid);
			if(pass.equals(passSaved)) {
				response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerHome1.jsp");
				PrintWriter pw= response.getWriter();
				pw.print("<h1 id='fromSomewhere'>"+mid+"</h1>");
			}
			else {
				response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerLogin.html");
			}
		} catch (Exception e) {
			response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerLogin.html");
		}
	}

}
