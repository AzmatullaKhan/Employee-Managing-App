document.getElementById('managerHome_container_one_managerID').value=localStorage.getItem('managerId');
document.getElementById('managerHome_container_three_sixmanagerID').value=localStorage.getItem('managerId');
document.getElementById('managerHome_container_three_three_managerID').value=localStorage.getItem('managerId');

let employee_data=[];
let parse_employee_data=[]

let employee_task_data=[]
let	parse_employee_task_data=[]

let parse_manager_data=[]

let manager_meetings=[]

let parse_manager_meeting=[]

if(localStorage.getItem('employee_data')){
	parse_employee_data = JSON.parse(localStorage.getItem('employee_data'))
	console.log(parse_employee_data)
}

if(localStorage.getItem('employee_task_data')){
	parse_employee_task_data= JSON.parse(localStorage.getItem('employee_task_data'))
	console.log(parse_employee_data)
}

if(localStorage.getItem('manager_meetings')){
	parse_manager_meeting= JSON.parse(localStorage.getItem('manager_meetings'))
	console.log(parse_manager_meeting)
}
	
function validateScheduleMeeting(){
	let mid=document.getElementById('managerHome_container_three_three_managerID').value
	let memail=document.getElementById('scheduleMeeting_email_id').value
	let groupId=document.getElementById('scheduleMeeting_group').value
	let subject=document.getElementById('scheduleMeeting_email_subject').value
	let context=document.getElementById('scheduleMeeting_email_context').value
	if(localStorage.getItem('manager_meetings')){
		manager_meetings=JSON.parse(localStorage.getItem('manager_meetings'))
		manager_meetings.push({"mid":mid, "memail":memail, "groupId":groupId, "subject":subject, "context":context})
		localStorage.setItem('manager_meetings', JSON.stringify(manager_meetings))
	}
	else{
		manager_meetings.push({"mid":mid, "memail":memail, "groupId":groupId, "subject":subject, "context":context})
		localStorage.setItem('manager_meetings', JSON.stringify(manager_meetings))
	}
    alert('Meeting has been successfully Scheduled. Reast Easy Now')
}

function checkScheduleMeetingGroupID(){
    let manager=document.getElementById('scheduleMeeting_group')
    let char=manager.value[manager.value.length-1]
    if(!((char>='0' && char<='9') || !char || char===',')){
        document.getElementById('scheduleMeeting_group_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('scheduleMeeting_group_label').className='managerHome_container_three_three_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}
function handleScheduleMeetingGroupChange(){
    let groups=document.getElementById('scheduleMeeting_group').value
    groups=groups.split(',')
    if(localStorage.getItem('employee_data')){
        let ped=JSON.parse(localStorage.getItem('employee_data'))
        let isPresent=true
        for (let index = 0; index < groups.length && isPresent; index++) {
            const element_group = groups[index];
            for (let i = 0; i < ped.length; i++) {
                const element_ped = ped[i];
                if(element_group===element_ped.egroup){
                    isPresent=true
                    break
                }
                else
                    isPresent=false
            }
        }
        if(!isPresent){
            document.getElementById('scheduleMeeting_group').value=''
            alert("Check the mentioned Group Id. Make sure to enter the group id's which are allocated")
        }
    }
    else
        alert('There are no employee groups to send a mail. Please create Employees to make a mail.')
}

function checkScheduleMeetingSubject(){
    let manager=document.getElementById('scheduleMeeting_email_subject')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || char===' ' || !char)){
        document.getElementById('scheduleMeeting_email_subject_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('scheduleMeeting_email_subject_label').className='managerHome_container_three_three_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

let mail_count=Number(1)
if(localStorage.getItem('manager_meetings')){
    let array= JSON.parse(localStorage.getItem('manager_meetings'))
    array.forEach(element => {
        
        if(element.mid === localStorage.getItem('managerId')){
		
			let main_div=document.createElement('div')
	        main_div.className='managerHome_container_three_one_one_mini1_two_maildiv'
	
	        let span1=document.createElement('span')
	        span1.textContent=mail_count+". Group ID's: "+element.groupId
	
	        mail_count=mail_count+1 
	
	        let span2=document.createElement('span')
	        span2.textContent=element.subject
	
	        let span3=document.createElement('span')
	        span3.textContent=element.context
	
	        main_div.appendChild(span1)
	        main_div.appendChild(document.createElement('br'))
	        main_div.appendChild(span2)
	        main_div.appendChild(document.createElement('br'))
	        main_div.appendChild(span3)
	
	        document.getElementById('managerHome_container_three_one_one_mini1_two').appendChild(main_div)
		
		}
    });
}


function validateCreatEemployee(){
	let manager_id=document.getElementById('managerHome_container_one_managerID').value
	let ename=document.getElementById('createEmployee_name').value
	let eid=document.getElementById('createEmployee_id').value
	let erole=document.getElementById('createEmployee_role').value
	let epassword=erole+"@"+eid
	let egender
	
	
	if(document.getElementById('createEmployee_maleRadio').checked)
		egender='male'
	else
		egender='female'
		
	let egroup=document.getElementById('createEmployee_group').value
		
	if(localStorage.getItem('employee_data'))
		employee_data=JSON.parse(localStorage.getItem('employee_data'))
//	localStorage.removeItem('employee_data')
	
	employee_data.push({"mid":manager_id,"ename":ename, "eid":eid, "erole":erole, "epassword":epassword, "egender":egender, "egroup":egroup, "estatus":"Free"})
	localStorage.setItem('employee_data', JSON.stringify(employee_data))
}

function checkCreateEmployeeName(){
    let manager=document.getElementById('createEmployee_name')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || char===' ' || !char)){
        document.getElementById('createEmployee_name_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('createEmployee_name_label').className='managerHome_container_three_five_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function checkCreateEmployeeID(){
    let manager=document.getElementById('createEmployee_id')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || (char>='0' && char<='9') || char===' ' || !char)){
        document.getElementById('createEmployee_id_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('createEmployee_id_label').className='managerHome_container_three_five_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function changeDetectedCreateEmployee(){
    let manager=document.getElementById('createEmployee_id')
    if(localStorage.getItem('employee_data')){
		let checker_employee=JSON.parse(localStorage.getItem('employee_data'))
	    for (let index = 0; index < checker_employee.length; index++) {
	        const element = checker_employee[index];
	        if(element.eid === manager.value){
	            manager.value=""
	            alert('A employee with same Employee ID already exists.Submitting with same EID results in not adding the employee.')
	            break;
	        }
	    }
}
}

function checkCreateEmployeeGroupID(){
    let manager=document.getElementById('createEmployee_group')
    let char=manager.value[manager.value.length-1]
    if(!((char>='0' && char<='9') || !char)){
        document.getElementById('createEmployee_group_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('createEmployee_group_label').className='managerHome_container_three_five_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}


function validateGetSpecificEmployee(){
    document.getElementById('getSpecificEmployee_id').value=""
    document.getElementById('createEmployee_name').value=""
    document.getElementById('getSpecificEmployee_group').value=""
    window.location.href='/Employee-Managing-App//managerHome1.jsp'
    return false;
}
function checkGetSpecificEmployeeID(){
    let manager=document.getElementById('getSpecificEmployee_id')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || (char>='0' && char<='9') || char===' ' || !char)){
        document.getElementById('getSpecificEmployee_id_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('getSpecificEmployee_id_label').className='managerHome_container_three_four_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}
function checkGetSpecificEmployeeName(){
    let manager=document.getElementById('getSpecificEmployee_name')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || char===' ' || !char)){
        document.getElementById('getSpecificEmployee_name_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('getSpecificEmployee_name_label').className='managerHome_container_three_four_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}
function checkGetSpecificEmployeeGroupID(){
    let manager=document.getElementById('getSpecificEmployee_group')
    let char=manager.value[manager.value.length-1]
    if(!((char>='0' && char<='9') || !char)){
        document.getElementById('getSpecificEmployee_group_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('getSpecificEmployee_group_label').className='managerHome_container_three_four_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}


function appendEmployees(){
	if(parse_employee_data){
		parse_employee_data.forEach(element => {
            if(element.mid === document.getElementById('managerHome_container_one_managerID').value){
				
				let main_div= document.createElement('div')
				main_div.className='managerHome_container_three_one_one_mini2_eachEmployee'
                main_div.addEventListener('click', ()=>{
                    document.getElementById('popup_container').className="visible_popup_container"
                    document.getElementById('managerHome_container_one').style.pointerEvents='none'
                    
                    document.getElementById('popup_container_name').value=element.ename
                    document.getElementById('popup_container_id').value=element.eid
                    document.getElementById('popup_container_status').value=element.estatus
                    document.getElementById('popup_container_group').value=element.egroup   
                    document.getElementById('popup_container_role').value=element.erole

                    if(element.estatus!=="Free"){
                        if(localStorage.getItem('employee_task_data')){
                            let employee_task_data= JSON.parse(localStorage.getItem('employee_task_data'))
                            for (let index = 0; index < employee_task_data.length; index++) {
                                const element_task = employee_task_data[index];
                                if(element_task.taskStatus!=="complete" && element_task.eid===element.eid){
                                    document.getElementById('popup_container_task').value=element_task.taskHead
                                    document.getElementById('popup_container_duration').value=element_task.completionTime+" hrs"
                                }
                            }
                        }
                    }     
                    
                    let main_img=document.createElement('img')
                    main_img.src='./images/employeeDelete.png'
                    main_img.className='visible_popup_container_delete_icon'
                    main_img.alt='delete_icon'
                    
                    main_img.addEventListener('click', ()=>{
                        let new_parse_employee_data=[]
                        parse_employee_data.forEach(object => {
                            if(object.eid!==element.eid){
                                new_parse_employee_data.push({"mid":object.mid,"ename":object.ename, "eid":object.eid, "erole":object.erole, "epassword":object.epassword, "egender":object.egender, "egroup":object.egroup, "estatus":object.estatus})
                            }
                        });
                        localStorage.setItem('employee_data', JSON.stringify(new_parse_employee_data))
                        window.location.reload()
                    })

                    document.getElementById('popup_container').appendChild(main_img)

                })
				
				let main_div_img= document.createElement('img')
				if(element.egender === "male")
					main_div_img.src='./images/employeeMale.png'
				else
					main_div_img.src='./images/employeeFemale.png'
					
					main_div_img.className='managerHome_container_three_one_one_mini2_eachEmployee_img'
				
				let mini_div=document.createElement('div')
				mini_div.className='managerHome_container_three_one_one_mini2_eachEmployee_div'
				
				let name=document.createElement('h3')
				let employeeID=document.createElement('h3')
				let status=document.createElement('h3')
				let groupNummber=document.createElement('h3')
				let role=document.createElement('h3')
				
				name.innerText=element.ename
				employeeID.innerText=element.eid
				status.innerText=element.estatus
				groupNummber.innerText=element.egroup
				role.innerText=element.erole
				
				mini_div.appendChild(name)
				mini_div.appendChild(employeeID)
				mini_div.appendChild(status)
				mini_div.appendChild(groupNummber)
				mini_div.appendChild(role)
				
				main_div.appendChild(main_div_img)
				main_div.appendChild(mini_div)
				
				let main=document.getElementById('managerHome_container_three_one_one_mini2_details')
				main.appendChild(main_div)
	
			}
        });
	}
}

appendEmployees()

function popupContainerCloseClick(){
    document.getElementById('popup_container').className="hidden_popup_container"   
    document.getElementById('managerHome_container_one').style.pointerEvents='initial'
}

function checkAddTaskEmployeeID(){
    let manager=document.getElementById('addTask_id')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || (char>='0' && char<='9') || char===' ' || !char)){
        document.getElementById('addTask_id_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('addTask_id_label').className='managerHome_container_three_six_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function changeDetectedFromAddTask(){
    let manager=document.getElementById('addTask_id')
    let checker_employee=JSON.parse(localStorage.getItem('employee_data'))
    let is_presenet=false
    if(localStorage.getItem('employee_data')){
		for (let index = 0; index < checker_employee.length; index++) {
	        const element = checker_employee[index];
	        if(element.eid === manager.value){
	            is_presenet=true
	            break;
	        }
	    }
	}
    if(is_presenet===false){
        manager.value=""
        alert("Then mentioned ID isn't any of your Employee. Please provide a Employee ID from your company.")
    }

    if(localStorage.getItem('employee_task_data')){
		let checker_addtask= JSON.parse(localStorage.getItem('employee_task_data'))
	    for (let index = 0; index < checker_addtask.length; index++) {
	        const element = checker_addtask[index];
	        if(element.eid===manager.value && element.taskStatus==='notComplete'){
	            alert("The mentioned Employee is already working on a task of "+ element.completionTime+" hrs.Still want to assign, please provide the below details")
	            break;
	        }
	    }
	}
}

function checkAddTaskDurationDay(){
    let manager=document.getElementById('addTask_duration_days')
    let char=manager.value[manager.value.length-1]
    if(!((char>='0' && char<='9') || !char)){
        document.getElementById('addTask_duration_days_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('addTask_duration_days_label').className='managerHome_container_three_four_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}
function checkAddTaskDurationHour(){
    let manager=document.getElementById('addTask_duration_hours')
    let char=manager.value[manager.value.length-1]
    if(!((char>='0' && char<='9') || !char)){
        document.getElementById('addTask_duration_hours_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('addTask_duration_hours_label').className='managerHome_container_three_four_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function validateAddTask(){
	let manager_id=document.getElementById('managerHome_container_three_sixmanagerID').value
	let eid=document.getElementById('addTask_id').value
	let taskHead=document.getElementById('addTask_taskhead').value
	let taskDesc=document.getElementById('addTask_desc').value
	
	let days=Number(document.getElementById('addTask_duration_days').value)
	let hours=Number(document.getElementById('addTask_duration_hours').value)
	
	let taskCompletionTime=(days*24)+hours

		
	//employee_data=JSON.parse(localStorage.getItem('employee_data'))
//	localStorage.removeItem('employee_data')

	if(localStorage.getItem('employee_task_data'))
		employee_task_data=JSON.parse(localStorage.getItem('employee_task_data'))
    
    let changing_status = JSON.parse(localStorage.getItem('employee_data'))
    for (let index = 0; index < changing_status.length; index++) {
        const element = changing_status[index];
        if(element.eid === eid){
            element.estatus="Assigned"
            break;
        }        
    }   
    localStorage.setItem('employee_data', JSON.stringify(changing_status))
	
	employee_task_data.push({"mid":manager_id, "eid":eid, "taskHead":taskHead, "taskDescriptio":taskDesc, "completionTime":taskCompletionTime, "taskStatus":"notComplete"})
	localStorage.setItem('employee_task_data', JSON.stringify(employee_task_data))
}



if(localStorage.getItem('manager_data')){
    parse_manager_data=JSON.parse(localStorage.getItem('manager_data'))

    parse_manager_data.forEach(element => {
        if(element.mid===localStorage.getItem('managerId')){
            document.getElementById('profile_name').value=element.mname
            document.getElementById('profile_id').value=element.mid
            document.getElementById('profile_company_name').value=element.mcompanyname
            document.getElementById('profile_role').value=element.mrole
            document.getElementById('profile_mail').value=element.memail
            document.getElementById('profile_password').value=element.mpassword

			setTimeout(()=>{
				document.getElementById('scheduleMeeting_email_id').value=element.memail
			},10)
        }
    });
}

function handleLogoutClick(){
	localStorage.removeItem('managerId')
}
// [{"mid":"2200031618","mname":"Azmatulla Khan","mcompanyname":"KL University","morle":"Manager","memail":"2200031618@kluniversity.in","mpassword":"MalikMD@123"}]

if(localStorage.getItem('employee_mails')){
    let employee_mails = JSON.parse(localStorage.getItem('employee_mails'))

    employee_mails.forEach(element => {
        if(element.mid===localStorage.getItem('managerId')){
            let main_div=document.createElement('div')
            main_div.className='managerHome_container_three_one_one_mini1_one_employeemail'

            let span1=document.createElement('span')
            span1.textContent="From: "+element.eid

            let span2=document.createElement('span')
            span2.textContent=element.esubject

            let span3=document.createElement('span')
            span3.style.textAlign='center'
            span3.textContent=element.econtext

            main_div.appendChild(span1)
            main_div.appendChild(document.createElement('br'))
            main_div.appendChild(span2)
            main_div.appendChild(document.createElement('br'))
            main_div.appendChild(span3)

            document.getElementById('managerHome_container_three_one_one_mini1_one').appendChild(main_div)
        }
    });
}