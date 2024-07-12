
function validateScheduleMeeting(){
    alert('Meeting has been successfully Scheduled. Reast Easy Now')
    document.getElementById('scheduleMeeting_group').value=""
    document.getElementById('scheduleMeeting_email_subject').value=""
    window.location.href='/Employee-Managing-App/managerHome1.html#dashboard'
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

function validateCreateEmployee(){
    document.getElementById('createEmployee_name').value=""
    document.getElementById('createEmployee_id').value=""
    document.getElementById('createEmployee_group').value=""
    window.location.href='/Employee-Managing-App/managerHome1.html'
    return false
}

function checkCreateEmployeeName(){
    let manager=document.getElementById('createEmployee_name')
    let char=manager.value[manager.value.length-1]
    console.log(char)
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
    window.location.href='/Employee-Managing-App/managerHome1.html'
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
