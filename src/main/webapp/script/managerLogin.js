function validateManagerLogin(){
    window.location.href='/Employee-Managing-App/managerHome1.html'
    return false
}
function checkMangerID(){
    let manager=document.getElementById('manager_user_id')
    let char=manager.value[manager.value.length-1]
    if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || (char>='0' && char<='9') || char===' ' || !char)){
        document.getElementById('manager_user_id_label').className='error_animation'
        setTimeout(()=>{
            document.getElementById('manager_user_id_label').className='managerLogin_container_two_label'
        }, 1000)
        manager.value=manager.value.slice(0, manager.value.length-1)
    }
}