document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault()
    let phonenumber=document.getElementById('phone-number').value
    let pinnumber=document.getElementById('pin-number').value
    console.log(phonenumber,pinnumber)
    if(phonenumber==='5'&&pinnumber==='1234'){
        console.log('you are loged in')
        window.location.href= '\home.html'
    }
    else{
        alert('wrong id or password')
    }
})