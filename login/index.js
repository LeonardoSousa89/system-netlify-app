const doc  = document
doc.onclick = addEventListener('click',(e)=>e.preventDefault())
doc.onload  = addEventListener('load',()=>{
   $('#alert_login').hide()
   $('#alert_empty').hide()
}) 

$('#enter').click(function(){
    let email = document.querySelector('#floatingInput'   ).value
    let pass  = document.querySelector('#floatingPassword').value

    if(email == '' || pass == ''){
        $('#alert_empty').show(100)
    }else{
        const url = '../login/mock.json'

        fetch(url)
            .then(data => data.json())
            .then(data => {
                data.map((e,i)=>{
                   
                    let userI     = e.user 
                    let passwordI = e.password

                    if(userI == email && passwordI == pass){
                        
                        doc.location.href = '../store/index.html'
                        storage(email, pass)

                    }else if(e.user != email && e.password != pass){
                        $('#alert_login').show(100)
                    }
                })
            })
            .catch(err => console.log(err))
    }
})

$('#floatingInput').mouseenter(function(){
    $('#alert_login').hide(100)
    $('#alert_empty').hide(100)
})

$('#floatingPassword').mouseenter(function(){
    $('#alert_login').hide(100)
    $('#alert_empty').hide(100)
})

function storage(email, pass){
    localStorage.setItem('_USER',email)
    localStorage.setItem('_PASS',pass)
}
