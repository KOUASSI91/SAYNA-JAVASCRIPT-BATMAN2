window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',(e)=>{
        let email = document.getElementById('email');
        if(email.value == ''){
            
        }
        e.preventDefault();
        document.getElementById('popupbox').style.display = 'block';
      

    })
}