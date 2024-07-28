let employee_id=localStorage.getItem('employeeId')

let employee_task_data=JSON.parse(localStorage.getItem('employee_task_data'))

document.getElementById('overview_employee_id').value=employee_id

let employee_mails=[]

if(localStorage.getItem('employee_mails')){
    console.log(JSON.parse(localStorage.getItem('employee_mails')))
}

setTimeout(()=>{
    for (let index = 0; index < employee_data.length; index++) {
        const element = employee_data[index];
        if(element.eid===employee_id){
            document.getElementById('overview_mid').value=element.mid
            break
        }
    }
},100)

let count=Number(1);
employee_task_data.forEach(element => {
    if(element.eid===employee_id && element.taskStatus==='notComplete'){
        let main_div=document.createElement('div')
        main_div.className='employee_container_311_tasksNotDone_task'

        let span1=document.createElement('span')
        span1.className='employee_container_311_tasksNotDone_task_span'
        span1.textContent=count

        count=count+1;

        let head1=document.createElement('h3')
        head1.textContent=element.taskHead

        let span2=document.createElement('span')
        span2.className='employee_container_311_tasksNotDone_task_desc'
        span2.textContent=element.taskDescriptio

        let span3=document.createElement('span')
        span3.className='employee_container_311_tasksNotDone_task_span'
        span3.textContent=element.completionTime+" hrs"

        let button = document.createElement('button')
        button.className='employee_container_311_tasksNotDone_task_button'
        button.textContent='Done?'
		button.addEventListener('click',()=>{

            if(confirm("Completing the task a lot sooner than assigned time, Still want to proceed?")){
                for (let index = 0; index < employee_task_data.length; index++) {
                    const element = employee_task_data[index];
                    if(element.eid === employee_id && element.taskStatus === 'notComplete'){
                        element.taskStatus = "complete"
                        break;
                    }
                }
                localStorage.setItem('employee_task_data', JSON.stringify(employee_task_data))

                let isThereTask=false
                for (let index = 0; index < employee_task_data.length; index++) {
                    const element = employee_task_data[index];
                    if(element.eid === employee_id && element.taskStatus === 'notComplete'){
                        isThereTask=true
                        break;
                    }
                }
                if(!isThereTask){
                    let done_data=JSON.parse(localStorage.getItem('employee_data'))
                    for (let index = 0; index < done_data.length; index++) {
                        const element = done_data[index];
                        if(element.eid===employee_id){
                            element.estatus="Free"
                            break;
                        }
                    }
                    localStorage.setItem('employee_data', JSON.stringify(done_data))

                    window.location.reload()
                }
            }
        })

        main_div.appendChild(span1)
        main_div.appendChild(head1)
        main_div.appendChild(span2)
        main_div.appendChild(span3)
        main_div.appendChild(button)

        document.getElementById('employee_container_311_tasksNotDone_container').appendChild(main_div)
    }
});


count=Number(1)
employee_task_data.forEach(element => {
    if(element.eid===employee_id && element.taskStatus==='complete'){
        let main_div=document.createElement('div')
        main_div.className='employee_container_311_tasksDone_task'

        let span1=document.createElement('span')
        span1.className='employee_container_311_tasksDone_task_span'
        span1.textContent=count

        count=count+1

        let head1=document.createElement('h3')
        head1.textContent=element.taskHead

        let span2=document.createElement('span')
        span2.className='employee_container_311_tasksDone_task_span'
        span2.textContent=element.mid+" - Assigner"

        main_div.appendChild(span1)
        main_div.appendChild(head1)
        main_div.appendChild(span2)

        document.getElementById('employee_container_311_tasksDone_container').appendChild(main_div)
    }
});

let employee_data= JSON.parse(localStorage.getItem('employee_data'))

employee_data.forEach(element => {
    if(element.eid === employee_id){
        document.getElementById('employee_container_311_one_input_name').value=element.ename
        document.getElementById('employee_container_311_one_input_eid').value=element.eid
        document.getElementById('employee_container_311_one_input_password').value=element.epassword
        document.getElementById('employee_container_311_one_input_group').value=element.egroup
        document.getElementById('employee_container_311_one_input_role').value=element.erole
        document.getElementById('employee_container_311_one_input_gender').value=element.egender
    }
});

function handleLogoutClick(){
	localStorage.removeItem('employeeId')
}

function isValid(array){
    let group=document.getElementById('employee_container_311_one_input_group').value
    array = array.split(',')
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element===group)
            return true
    }
    return false
}

function showAllEmployeeMails(){
    if(localStorage.getItem('manager_meetings')){
        let array=JSON.parse(localStorage.getItem('manager_meetings'))
        array.forEach(element => {
            if(isValid(element.groupId)){

                let main_div = document.createElement('div')
                main_div.className='employeeHome_container_one_mail_eachMail'

                let span1=document.createElement('span')
                span1.textContent='Groups Invovled: '+element.groupId

                let span2=document.createElement('span')
                span2.textContent=element.subject
                
                let span3=document.createElement('span')
                span3.textContent=element.context

                main_div.appendChild(span1)
                main_div.appendChild(document.createElement('br'))
                main_div.appendChild(span2)
                main_div.appendChild(document.createElement('br'))
                main_div.appendChild(span3)

                document.getElementById('employeeHome_container_one_mail').appendChild(main_div)

            }
        });
    }
    document.getElementById('employeeHome_container_one_mail').className='employeeHome_container_one_mail_visible'
}

function hideAllEmployeeMails(){
    document.getElementById('employeeHome_container_one_mail').className='employeeHome_container_one_mail_hidden'
    window.location.reload()
}

function checkOverviewSubject(){
    let manager=document.getElementById('overview_employee_subject')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || char===' ' || !char)){
        document.getElementById('employee_container_321_overview_div_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('employee_container_321_overview_div_label').className='employee_container_321_overview_div_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}

function handleOvervireSubmit(){
    if(localStorage.getItem('employee_mails'))
        employee_mails=JSON.parse(localStorage.getItem('employee_mails'))

    let esubject=document.getElementById('overview_employee_subject').value
    let eid=document.getElementById('overview_employee_id').value
    let econtext=document.getElementById('overview_employee_context').value
    let mid=document.getElementById('overview_mid').value

    employee_mails.push({"eid":eid, "esubject":esubject, "econtext":econtext, "mid":mid})

    localStorage.setItem('employee_mails', JSON.stringify(employee_mails))
    alert('Mail has been successfully sent to Manager')
    // window.location.reload()
}


employee_data.forEach(element => {
    if(element.egroup === document.getElementById('employee_container_311_one_input_group').value){
        let span=document.createElement('span')
        span.textContent=element.eid 
        document.getElementById('employeeHome_container_one_teamHolder').appendChild(span)
    }
});
