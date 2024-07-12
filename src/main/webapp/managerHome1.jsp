<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M Home</title>
    <link rel="stylesheet" href="./css/managerHome.css">
</head>
<body>
    <div class="managerHome_container_one">
        <div class="managerHome_container_one_nav">
            <a class="managerHome_container_one_nav_anchor" href="#dashboard">Dashboasrd</a>
            <a class="managerHome_container_one_nav_anchor" href="#allEmployeeOverview" onclick="handleOverViewClick()">Overview</a>
            <a class="managerHome_container_one_nav_anchor" href="#scheduleMeeting">Schedule Meeting</a>
            <a class="managerHome_container_one_nav_anchor" href="#getSpecificEmployee">Edit Employee</a>
            <a class="managerHome_container_one_nav_anchor" href="#creatEemployee">Create Employee</a>
            <a class="managerHome_container_one_nav_anchor" href="#addTask">Add Task</a>
            <a class="managerHome_container_one_nav_anchor" href="#profile">Profile</a>
            <a class="managerHome_container_one_nav_anchor" href="loginType.html">Logout</a>
        </div>
        <div class="managerHome_container_three">
            <section  class="managerHome_container_three_one" id="dashboard">
                <div class="managerHome_container_three_one_one">
                    <div class="managerHome_container_three_one_one_mini1">
                        <span>Tasks</span>
                        <span>Scheduled</span>
                        <span>Today</span>
                        <span>For</span>
                        <span>Manaer</span>
                    </div>
                    <div class="managerHome_container_three_one_one_mini2">
                        <div style="display: flex;">
                            <div class="managerHome_container_three_one_one_mini2_eachEmployee">
                                <img src="./images/employeeMale.png" class="managerHome_container_three_one_one_mini2_eachEmployee_img"/>
                                <div class="managerHome_container_three_one_one_mini2_eachEmployee_div">
                                    <h3>Name</h3>     
                                    <h3>Employee ID</h3>     
                                    <h3>Working or Not</h3> 
                                    <h3>Group Number</h3>
                                    <h3>Role</h3>  
                                </div>
                            </div>
                            <div class="managerHome_container_three_one_one_mini2_eachEmployee">
                                <img src="./images/employeeFemale.png" class="managerHome_container_three_one_one_mini2_eachEmployee_img"/>
                                <div class="managerHome_container_three_one_one_mini2_eachEmployee_div">
                                    <h3>Name</h3>     
                                    <h3>Employee ID</h3>     
                                    <h3>Working or Not</h3> 
                                    <h3>Group Number</h3>
                                    <h3>Role</h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="managerHome_container_three_two" id="allEmployeeOverview">
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
            </section>
            <section class="managerHome_container_three_three" id="scheduleMeeting">
                <div class="managerHome_container_three_three_one">
                    <form class="managerHome_container_three_three_two" onsubmit="return validateScheduleMeeting()">
                        <label for="scheduleMeeting_email_id" class="managerHome_container_three_three_two_label">Email</label>
                        <input type="email" name="scheduleMeeting_email_id" class="managerHome_container_three_three_two_input" value="manager@gmail.com" readonly><br><br>
                    
                        <label for="scheduleMeeting_group" class="managerHome_container_three_three_two_label" id="scheduleMeeting_group_label">Group ID's</label>
                        <input type="text" name="scheduleMeeting_group" id="scheduleMeeting_group" class="managerHome_container_three_three_two_input" placeholder="*** Enter Group ID's seperated by ',' ***" required onkeyup="checkScheduleMeetingGroupID()"><br><br>

                        <label for="scheduleMeeting_email_subject" class="managerHome_container_three_three_two_label" id="scheduleMeeting_email_subject_label">Subject</label>
                        <input type="text" name="scheduleMeeting_email_subject" id="scheduleMeeting_email_subject" class="managerHome_container_three_three_two_input" placeholder="*** Subject ***" required onkeyup="checkScheduleMeetingSubject()"><br><br>
                    
                        <label for="scheduleMeeting_email_context" class="managerHome_container_three_three_two_label">Context</label>
                        <textarea style="height: 100px;text-align: start;" type="text" name="scheduleMeeting_email_context" class="managerHome_container_three_three_two_input" placeholder="*** Context ***" ></textarea><br>

                        <button class="managerHome_container_three_three_two_button" type="submit">Schedule</button>
                    </form>
                </div>
            </section>
            <section class="managerHome_container_three_four" id="getSpecificEmployee">
                <div class="managerHome_container_three_four_one">
                    <form class="managerHome_container_three_four_two" onsubmit="return validateGetSpecificEmployee()">
                        
                        <label for="getSpecificEmployee_id" id="getSpecificEmployee_id_label" class="managerHome_container_three_four_two_label">ID</label>
                        <input type="text" name="getSpecificEmployee_id" id="getSpecificEmployee_id" class="managerHome_container_three_four_two_input" placeholder="*** Enter the employee ID ***" onkeyup="checkGetSpecificEmployeeID()" required><br><br>
                        <button class="managerHome_container_three_four_two_button" type="button">Get Detaile</button><br><br>


                        <label for="getSpecificEmployee_name" id="getSpecificEmployee_name_label" class="managerHome_container_three_five_two_label">Name</label>
                        <input type="text" name="createEmployee_name" id="getSpecificEmployee_name" class="managerHome_container_three_five_two_input" placeholder="*** Name ***" onkeyup="checkGetSpecificEmployeeName()" required><br>

                        <label for="" class="managerHome_container_three_four_two_label">Role</label>
                        <select name="getSpecificEmployee_role" class="managerHome_container_three_four_two_input" style="text-align: center;" aria-readonly="true">
                            <option>Role 1</option>
                            <option>Role 2</option>
                            <option>Role 3</option>
                            <option>Role 4</option>
                        </select><br>

                        <label for="getSpecificEmployee_group" id="getSpecificEmployee_group_label" class="managerHome_container_three_four_two_label">Group</label>
                        <input type="tezt" name="getSpecificEmployee_group" id="getSpecificEmployee_group" class="managerHome_container_three_four_two_input" placeholder="*** Assign Into a Group ***" onkeyup="checkGetSpecificEmployeeGroupID()" required minlength="1"><br>

                        <div style="display: flex;">
                            <button class="managerHome_container_three_four_two_button" type="submit" >Edit</button>
                            <button class="managerHome_container_three_four_two_button" type="button">Delete</button>
                        </div>

                    </form>
                </div>
            </section>
            <section class="managerHome_container_three_five" id="creatEemployee">
                <div class="managerHome_container_three_five_one">
                    <form class="managerHome_container_three_five_two" onsubmit="return validateCreateEmployee()">

                        <label for="createEmployee_name" id="createEmployee_name_label" class="managerHome_container_three_five_two_label">Name</label>
                        <input type="text" name="createEmployee_name" id="createEmployee_name" class="managerHome_container_three_five_two_input" placeholder="*** Name ***" required onkeyup="checkCreateEmployeeName()"><br>

                        <label for="createEmployee_id" id="createEmployee_id_label" class="managerHome_container_three_five_two_label">ID</label>
                        <input type="text" name="createEmployee_id" id="createEmployee_id" class="managerHome_container_three_five_two_input" placeholder="*** ID given by company ***" required onkeyup="checkCreateEmployeeID()"><br>

                        <label for="createEmployee_password" id="createEmployee_password_label" class="managerHome_container_three_five_two_label">Password</label>
                        <input type="text" name="createEmployee_password" id="createEmployee_password" class="managerHome_container_three_five_two_input" readonly value="*** Password is auto generated, (Role@ID) ***"><br>

                        <label for="createEmployee_role" class="managerHome_container_three_five_two_label">Role</label>
                        <select name="createEmployee_role" class="managerHome_container_three_five_two_input" style="text-align: center;" required>
                            <option>Role 1</option>
                            <option>Role 2</option>
                            <option>Role 3</option>
                            <option>Role 4</option>
                        </select><br>

                        <label class="managerHome_container_three_five_two_label">Gender</label>
                        <div>
                            <input type="radio" id="createEmployee_maleRadio" name="gender" value="male" id="male" checked/> Male<br>
                            <input type="radio" id="createEmployee_femaleRadio" name="gender" value="female" id="female"/> FeMale<br>
                        </div><br>

                        <label for="createEmployee_group" id="createEmployee_group_label" class="managerHome_container_three_five_two_label">Group</label>
                        <input type="tezt" name="createEmployee_group" id="createEmployee_group" class="managerHome_container_three_five_two_input" placeholder="*** Assign Into a Group ***" required minlength="1" onkeyup="checkCreateEmployeeGroupID()"><br>

                        <button class="managerHome_container_three_five_two_button" type="submit">Create</button>
                    </form>
                </div>
            </section>
            <section class="managerHome_container_three_six" id="addTask">
                <div class="managerHome_container_three_six_one">
                    Add Task
                </div>
            </section>
            <section class="managerHome_container_three_seven" id="profile">
                <div class="managerHome_container_three_seven_one">
                    Manager Profile
                </div>
            </section>
        </div>
    </div>
    <script src="./script/managerHome.js"></script>
</body>
</html>