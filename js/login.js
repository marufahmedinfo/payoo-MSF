document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === "01320316967" && pinNumber === "1234"){
        console.log('right you');
        window.location.href = "/home.html";
    }else{
        alert("Wrong Phone Number & Pin Number")
    }
})