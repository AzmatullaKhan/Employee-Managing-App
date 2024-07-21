package com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.EmailModel;
import com.model.EmailOperator;

public class EmailMeeting extends HttpServlet {
	private static final long serialVersionUID = 1L;



	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		EmailModel em=new EmailModel();
		
		em.setMid(request.getParameter("managerHome_container_three_three_managerID"));
		em.setMemail(request.getParameter("scheduleMeeting_email_id"));
		em.setGroupId(request.getParameter("scheduleMeeting_group"));
		em.setSubject(request.getParameter("scheduleMeeting_email_subject"));
		em.setContext(request.getParameter("scheduleMeeting_email_context"));
		
		EmailOperator eo=new EmailOperator();
		
		try {
			eo.addEmail(em);
			response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerHome.jsp");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
