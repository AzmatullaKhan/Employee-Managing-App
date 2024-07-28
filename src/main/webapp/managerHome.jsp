<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M Home</title>
    <link rel="stylesheet" href="./css/managerHome.css">
</head>
<body>
    <div class='managerHome_container_one' id="managerHome_container_one">
        <div class="hidden_popup_container" id="popup_container">
            <p class="visible_popup_container_close" onclick="popupContainerCloseClick()">X</p>
            <span class="visible_popup_container_label">Employee Name</span><input type="text" class="visible_popup_container_input" id="popup_container_name" readonly>
            <span class="visible_popup_container_label">Employee ID</span><input type="text" class="visible_popup_container_input" id="popup_container_id" readonly>
            <span class="visible_popup_container_label">Employee Satus</span><input type="text" class="visible_popup_container_input" id="popup_container_status" readonly>
            <span class="visible_popup_container_label">Employee Group</span><input type="text" class="visible_popup_container_input" id="popup_container_group">
            <span class="visible_popup_container_label">Employee Role</span><input type="text" class="visible_popup_container_input" id="popup_container_role">
            <span class="visible_popup_container_label">Employee Task</span><input type="text" class="visible_popup_container_input" id="popup_container_task" readonly value="Not Assigned">
            <span class="visible_popup_container_label">Employee Duration</span><input type="text" class="visible_popup_container_input" id="popup_container_duration" readonly value="Not Assigned">
        </div>
    	<div class="managerHome_container_one_nav">
            <a class="managerHome_container_one_nav_anchor" href="#dashboard">Dashboard</a>
            <!-- <a class="managerHome_container_one_nav_anchor" href="#allEmployeeOverview">Overview</a> -->
            <a class="managerHome_container_one_nav_anchor" href="#scheduleMeeting">Schedule Meeting</a>
           <!--  <a class="managerHome_container_one_nav_anchor" href="#getSpecificEmployee">Edit Employee</a> -->
           <a class="managerHome_container_one_nav_anchor" href="#addTask">Add Task</a>
            <a class="managerHome_container_one_nav_anchor" href="#creatEemployee">Create Employee</a>
            <a class="managerHome_container_one_nav_anchor" href="#profile">Profile</a>
            <a class="managerHome_container_one_nav_anchor" href="loginType.html" onclick="handleLogoutClick()">Logout</a>
        </div>
        <div class="managerHome_container_three">
            <section  class="managerHome_container_three_one" id="dashboard">
                <div class="managerHome_container_three_one_one">
                    <div class="managerHome_container_three_one_one_mini1">
                        <div class="managerHome_container_three_one_one_mini1_one" id="managerHome_container_three_one_one_mini1_one">
                            <div style="position: sticky; top: 0px; width: 268px; display: flex;justify-content: center;align-items: center; background-color: #fff;"><br><br><span>-Mails Sent By Employees</span></div>
                        </div>
                        <div class="managerHome_container_three_one_one_mini1_two" id="managerHome_container_three_one_one_mini1_two">
                            <div style="position: sticky; top: 0px; width: 268px; display: flex;justify-content: center;align-items: center; background-color: #fff;"><br><br><span>-Mails Sent By You</span></div>
                        </div>
                    </div>
                    <div class="managerHome_container_three_one_one_mini2">
                        <div class="managerHome_container_three_one_one_mini2_detailHolder" id="managerHome_container_three_one_one_mini2_details">                  
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="managerHome_container_three_two" id="allEmployeeOverview">
                <div class="managerHome_container_three_two_one">
                    <div style="display: flex;">
                        <div class="managerHome_container_three_two_one_mini"> PieChart</div>
                        <div class="managerHome_container_three_two_one_mini"> Bar Graph</div>
                    </div>
                    <div style="display: flex;">
                        <div class="managerHome_container_three_two_one_mini"> Line Plot</div>
                        <div class="managerHome_container_three_two_one_mini"> DoughNut Graph</div>
                    </div>
                </div>
            </section> -->
            <section class="managerHome_container_three_three" id="scheduleMeeting">
                <div class="managerHome_container_three_three_one">
                    <form class="managerHome_container_three_three_two" onsubmit="validateScheduleMeeting()" action="em" method="post">
                    	<input type='text' style="display: none;" name="managerHome_container_three_three_managerID" id='managerHome_container_three_three_managerID' readonly>
                              
                        <label for="scheduleMeeting_email_id" class="managerHome_container_three_three_two_label">Email</label>
                        <input type="email" id="scheduleMeeting_email_id" name="scheduleMeeting_email_id" class="managerHome_container_three_three_two_input" value="manager@gmail.com" readonly><br><br>
                    
                        <label for="scheduleMeeting_group" class="managerHome_container_three_three_two_label" id="scheduleMeeting_group_label">Group ID's</label>
                        <input type="text" name="scheduleMeeting_group" id="scheduleMeeting_group" class="managerHome_container_three_three_two_input" placeholder="*** Enter Group ID's seperated by ',' ***" required onkeyup="checkScheduleMeetingGroupID()" onchange="handleScheduleMeetingGroupChange()"><br><br>

                        <label for="scheduleMeeting_email_subject" class="managerHome_container_three_three_two_label" id="scheduleMeeting_email_subject_label">Subject</label>
                        <input type="text" name="scheduleMeeting_email_subject" id="scheduleMeeting_email_subject" class="managerHome_container_three_three_two_input" placeholder="*** Subject ***" required onkeyup="checkScheduleMeetingSubject()"><br><br>
                    
                        <label for="scheduleMeeting_email_context" class="managerHome_container_three_three_two_label">Context</label>
                        <textarea style="height: 100px;text-align: start;" id="scheduleMeeting_email_context" name="scheduleMeeting_email_context" class="managerHome_container_three_three_two_input" placeholder="*** Context (Like Mentioning time and date of meeeting or Some mail context you want to convey to your employees)***" required></textarea><br>

                        <button class="managerHome_container_three_three_two_button" type="submit">Schedule</button>
                    </form>
                </div>
            </section>
           <!--   <section class="managerHome_container_three_four" id="getSpecificEmployee">
                <div class="managerHome_container_three_four_one">
                    <form class="managerHome_container_three_four_two" onsubmit="return validateGetSpecificEmployee()">
                        
                        <label for="getSpecificEmployee_id" id="getSpecificEmployee_id_label" class="managerHome_container_three_four_two_label">ID</label>
                        <input type="text" name="getSpecificEmployee_id" id="getSpecificEmployee_id" class="managerHome_container_three_four_two_input" placeholder="*** Enter the employee ID ***" onkeyup="checkGetSpecificEmployeeID()" required><br><br>
                        <button class="managerHome_container_three_four_two_button" type="button">Get Detaile</button><br><br>


                        <label for="getSpecificEmployee_name" id="getSpecificEmployee_name_label" class="managerHome_container_three_five_two_label">Name</label>
                        <input type="text" name="getSpecificEmployee_name" id="getSpecificEmployee_name" class="managerHome_container_three_five_two_input" placeholder="*** Name ***" onkeyup="checkGetSpecificEmployeeName()" required><br>

                        <label for="getSpecificEmployee_role" class="managerHome_container_three_four_two_label">Role</label>
                        <select name="getSpecificEmployee_role" id="getSpecificEmployee_role" class="managerHome_container_three_four_two_input" style="text-align: center;" aria-readonly="true">
                            <option>Role1</option>
                            <option>Role2</option>
                            <option>Role3</option>
                            <option>Role4</option>
                        </select><br>

                        <label for="getSpecificEmployee_group" id="getSpecificEmployee_group_label" class="managerHome_container_three_four_two_label">Group</label>
                        <input type="tezt" name="getSpecificEmployee_group" id="getSpecificEmployee_group" class="managerHome_container_three_four_two_input" placeholder="*** Assign Into a Group ***" onkeyup="checkGetSpecificEmployeeGroupID()" required minlength="1"><br>

                        <div style="display: flex;">
                            <button class="managerHome_container_three_four_two_button" type="submit" >Edit</button>
                            <button class="managerHome_container_three_four_two_button" type="button">Delete</button>
                        </div>

                    </form>
                </div>
            </section> -->
            <section class="managerHome_container_three_six" id="addTask">
                <div class="managerHome_container_three_six_one">
                    <form class="managerHome_container_three_six_two" action="eta" method="post" onsubmit="validateAddTask()">
						<input type='text' style="display: none;" name="managerHome_container_three_sixmanagerID" id='managerHome_container_three_sixmanagerID' readonly>

                        <label for="addTask_id" id="addTask_id_label" class="managerHome_container_three_six_two_label">ID</label>
                        <input type="text" name="addTask_id" id="addTask_id" class="managerHome_container_three_six_two_input" placeholder="*** Enter the employee ID ***" required onkeyup="checkAddTaskEmployeeID()" onchange="changeDetectedFromAddTask()"><br><br>
                        
                        <label for="addTask_taskhead" id="addTask_taskhead_label" class="managerHome_container_three_six_two_label">Task Head</label>
                        <input type="text" name="addTask_taskhead" id="addTask_taskhead" class="managerHome_container_three_six_two_input" placeholder="*** Enter Task Heading(Backend, Frontend ...)***" required><br><br>
                        
                        <label for="addTask_desc" id="addTask_desc_label" class="managerHome_container_three_six_two_label">Task Description</label>
                        <input type="text" name="addTask_desc" id="addTask_desc" class="managerHome_container_three_six_two_input" placeholder="*** Enter Task Description***" required><br><br>
                        
                        <label for="addTask_duration_days" id="addTask_duration_days_label" class="managerHome_container_three_six_two_label">Task Duration (Days)</label>
                        <input type="text" name="addTask_duration_days" id="addTask_duration_days" class="managerHome_container_three_six_two_input" placeholder="*** Enter Number Days Allotted***" required onkeyup="checkAddTaskDurationDay()"><br><br>
                        
                        <label for="addTask_duration_hours" id="addTask_duration_hours_label" class="managerHome_container_three_six_two_label">Task Duration(Hours)</label>
                        <input type="text" name="addTask_duration_hours" id="addTask_duration_hours" class="managerHome_container_three_six_two_input" placeholder="*** Enter Number Hours Allotted***" required onkeyup="checkAddTaskDurationHour()"><br><br>

                        <button class="managerHome_container_three_six_two_button" type="submit">Assign</button>
                        
                    </form>
                </div>
            </section>
            <section class="managerHome_container_three_five" id="creatEemployee">
                <div class="managerHome_container_three_five_one">
                    <form class="managerHome_container_three_five_two" action="es" method="post" onsubmit="validateCreatEemployee()">
	
						<input type='text' style="display: none;" name="managerHome_container_one_managerID" id='managerHome_container_one_managerID' readonly>

                        <label for="createEmployee_name" id="createEmployee_name_label" class="managerHome_container_three_five_two_label">Name</label>
                        <input type="text" name="createEmployee_name" id="createEmployee_name" class="managerHome_container_three_five_two_input" placeholder="*** Name ***" required onkeyup="checkCreateEmployeeName()"><br>

                        <label for="createEmployee_id" id="createEmployee_id_label" class="managerHome_container_three_five_two_label">ID</label>
                        <input type="text" name="createEmployee_id" id="createEmployee_id" class="managerHome_container_three_five_two_input" placeholder="*** ID given by company ***" required onkeyup="checkCreateEmployeeID()" onchange="changeDetectedCreateEmployee()"><br>

                        <label for="createEmployee_password" id="createEmployee_password_label" class="managerHome_container_three_five_two_label">Password</label>
                        <input type="text" name="createEmployee_password" id="createEmployee_password" class="managerHome_container_three_five_two_input" readonly value="*** Password is auto generated, (Role@ID) ***"><br>

                        <label for="createEmployee_role" class="managerHome_container_three_five_two_label">Role</label>
                        <select name="createEmployee_role" id="createEmployee_role" class="managerHome_container_three_five_two_input" style="text-align: center;" required>
                            <option>Role1</option>
                            <option>Role2</option>
                            <option>Role3</option>
                            <option>Role4</option>
                        </select><br>

                        <label for="createEmployee_role" class="managerHome_container_three_five_two_label">Gender</label>
                        <div>
                            <input type="radio" id="createEmployee_maleRadio" name="gender" value="male" checked/> Male<br>
                            <input type="radio" id="createEmployee_femaleRadio" name="gender" value="female"/> FeMale<br>
                        </div><br>

                        <label for="createEmployee_group" id="createEmployee_group_label" class="managerHome_container_three_five_two_label">Group</label>
                        <input type="text" name="createEmployee_group" id="createEmployee_group" class="managerHome_container_three_five_two_input" placeholder="*** Assign Into a Group ***" required onkeyup="checkCreateEmployeeGroupID()"><br>

                        <button class="managerHome_container_three_five_two_button" type="submit">Create</button>
                    </form>
                </div>
            </section>
            <section class="managerHome_container_three_seven" id="profile">
                <div class="managerHome_container_three_seven_one">
                    <div class="managerHome_container_three_seven_two">

                        <label for="profile_name" id="profile_name_label" class="managerHome_container_three_seven_two_label">Name</label>
                        <input type="text" name="profile_name" id="profile_name" class="managerHome_container_three_seven_two_input" readonly><br>

                        <label for="profile_id" id="profile_id_label" class="managerHome_container_three_seven_two_label">ID</label>
                        <input type="text" name="profile_id" id="profile_id" class="managerHome_container_three_seven_two_input" readonly><br>

                        <label for="profile_company_name" id="profile_company_name_label" class="managerHome_container_three_seven_two_label">Company Name</label>
                        <input type="text" name="profile_company_name" id="profile_company_name" class="managerHome_container_three_seven_two_input" readonly><br>

                        <label for="profile_role" id="profile_role_label" class="managerHome_container_three_seven_two_label">Role</label>
                        <input type="text" name="profile_role" id="profile_role" class="managerHome_container_three_seven_two_input" readonly><br>

                        <label for="profile_mail" id="profile_mail_label" class="managerHome_container_three_seven_two_label">Comapny Mail</label>
                        <input type="text" name="profile_mail" id="profile_mail" class="managerHome_container_three_seven_two_input" readonly><br>

                        <label for="profile_password" id="profile_password_label" class="managerHome_container_three_seven_two_label">Password</label>
                        <input type="text" name="profile_password" id="profile_password" class="managerHome_container_three_seven_two_input" readonly><br>


                    </div>
                </div>
            </section>
        </div>
    </div>
    <script src="./script/managerHome.js"></script>
</body>
</html>