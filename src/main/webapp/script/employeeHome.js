let employee_id=localStorage.getItem('employeeId')

let employee_task_data=JSON.parse(localStorage.getItem('employee_task_data'))

let count=Number(1);
employee_task_data.forEach(element => {
    if(element.eid===employee_id){
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

        main_div.appendChild(span1)
        main_div.appendChild(head1)
        main_div.appendChild(span2)
        main_div.appendChild(span3)
        main_div.appendChild(button)

        document.getElementById('employee_container_311_tasksNotDone_container').appendChild(main_div)
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