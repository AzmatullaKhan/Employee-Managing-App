function validatePassword(pass){
    let cap=Number(0);
    let sp=Number(0);
    let num=Number(0);
    for(let i=0;i<pass.length;i++){
        if((pass[i]>='A' && pass[i]<='Z') && !cap)
            cap=1;
        if((pass[i]==='@' || pass[i]==='#' || pass[i]==='$' || pass[i]==='_' || pass[i]==='&') && !sp)
            sp=1;
        else if((pass[i]>='0' && pass[i]<='9') && !num)
            num=1;
    }
    return (cap && sp && num)
}

function provideAction(){
        if(!document.getElementById('manager_user_id_password').value)
    		document.getElementById('managerSignup_container_two_anchor_action').type='submit'
		else if(!validatePassword(document.getElementById('manager_user_id_password').value)){
    		document.getElementById('managerSignup_container_two_anchor_action').type='button'
        }
    	else{
            document.getElementById('managerSignup_container_two_anchor_action').type='submit'
        }
    }

function checkMangerID(){
    let manager_id=document.getElementById('manager_user_id')
    let char=manager_id.value[manager_id.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || (char>='0' && char<='9') || char===' ' || !char)){
        document.getElementById('manager_user_id_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('manager_user_id_label').className='managerSignup_container_two_label'
        }, 1000)
        manager_id.value=manager_id.value.slice(0, manager_id.value.length-1)
    }
}

function checkManagerName(){
    let manager=document.getElementById('manager_user_name')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || char===' ' || !char)){
        document.getElementById('manager_user_name_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('manager_user_name_label').className='managerSignup_container_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function checkManagerCompany() {
    let manager=document.getElementById('manager_user_companyname')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || (char>='0' && char<='9') || char===' ' || !char )){
        document.getElementById('manager_user_companyname_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('manager_user_companyname_label').className='managerSignup_container_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function handleEyeClick(){
    let type=document.getElementById('manager_user_id_password').type
    if(type==='password'){
        document.getElementById('manager_user_id_password').type='text'
        document.getElementById('employeeSignup_container_two_small_eye_cross').style.opacity=0
    }
    else{
        document.getElementById('manager_user_id_password').type='password'
        document.getElementById('employeeSignup_container_two_small_eye_cross').style.opacity=1
    }
}