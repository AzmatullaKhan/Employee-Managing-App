document.getElementById('managerHome_container_one_managerID').value=localStorage.getItem('managerId');


let employee_data=[];
let parse_employee_data=[]

parse_employee_data = JSON.parse(localStorage.getItem('employee_data'))
console.log(parse_employee_data)
	
function validateScheduleMeeting(){
    alert('Meeting has been successfully Scheduled. Reast Easy Now')
    document.getElementById('scheduleMeeting_group').value=""
    document.getElementById('scheduleMeeting_email_subject').value=""
    window.location.href='/Employee-Managing-App/ml#dashboard'
    return false
}

function checkScheduleMeetingGroupID(){
    let manager=document.getElementById('scheduleMeeting_group')
    let char=manager.value[manager.value.length-1]
    if(!((char>='0' && char<='9') || char===' ' || !char || char===',')){
        document.getElementById('scheduleMeeting_group_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('scheduleMeeting_group_label').className='managerHome_container_three_three_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
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
		
	employee_data=JSON.parse(localStorage.getItem('employee_data'))
//	localStorage.removeItem('employee_data')
	
	employee_data.push({"mid":manager_id,"ename":ename, "eid":eid, "erole":erole, "epassword":epassword, "egender":egender, "egroup":egroup})
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
    window.location.href='/Employee-Managing-App/ml'
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
	parse_employee_data.forEach(element => {
            if(element.mid === document.getElementById('managerHome_container_one_managerID').value){
				
				let main_div= document.createElement('div')
				main_div.className='managerHome_container_three_one_one_mini2_eachEmployee'
				
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
				status.innerText='No'
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

appendEmployees()

