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
                data.map(e=>{

                    if(     email == e.user
                        &&
                            pass == e.password
                        ){
                            doc.location.href = '../store/index.html'
                            storage(email, pass)
                    }else{
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

function testeArray(){
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
                    data.some(e=>{
                        console.log(  e.user[0] 
                                    + e.user[1] 
                                    + e.user[2] 
                                    + e.user[3] 
                                    + e.user[4] 
                                    + e.user[5])
                        console.log(e.user.match('devrct'))

                        if( email == e.user.match('mendes@outlook.com')
                            &&
                                pass == e.password.match('1234')
                            ||
                                email == e.user.match('devfl@gmail.com')
                            &&
                                pass == e.password.match('1054')
                            ||
                                email == e.user.match('devrct@yahoo.com')
                            &&
                                pass == e.password.match('1235')
                            ){
                                doc.location.href = '../store/index.html'
                                storage(email, pass)
                        }else{
                                $('#alert_login').show(100)
                        }
                        
                    })
                })
                .catch(err => console.log(err))
        }
    })
}
//testeArray()
