package com.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.ManagerModel;
import com.model.ManagerOperate;

public class ManagerAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public ManagerAdd() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ManagerModel mm= new ManagerModel();
		mm.setMid(request.getParameter("manager_user_id"));
		mm.setMname(request.getParameter("manager_user_name"));
		mm.setMcompanyName(request.getParameter("manager_user_companyname"));
		mm.setMrole("Manager");
		mm.setMgmail(request.getParameter("manager_user_email_id"));
		mm.setMpassword(request.getParameter("manager_user_id_password"));
		
		response.setContentType("text/html");
		PrintWriter pw= response.getWriter();
		
		ManagerOperate mo = new ManagerOperate();
		
		try {
			mo.addManager(mm);
		} catch (Exception e) {
//			response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerSignup.html");
		}
//		response.sendRedirect("http://localhost:8180/Employee-Managing-App/managerLogin.html");
	}

}
