//add maney
// document.getElementById('add-maney').addEventListener('click', function(event){
//     // console.log('click');
//     event.preventDefault();
//     const addManey = document.getElementById('input-add-maney').value;
//     const numberManey = parseFloat(addManey)
//     const pinNumber = document.getElementById('input-pin-number').value;
//     // console.log(addManey, pinNumber)
//     if(pinNumber === "1234"){
//         // console.log('jajfjakfg')
//         const balanceNumber = document.getElementById('avilable-balance').innerText;
//         // console.log(balanceNumber)
//         const numberBa = parseFloat(balanceNumber);
//         const newBalance  = numberBa + numberManey;
//         // console.log(newBalance)
//         document.getElementById("avilable-balance").innerText = newBalance;
//     }else{
//         alert("Faild to add maney ! Place try again")
//     }
// })


document.getElementById('add-maney').addEventListener('click', function(event){
    event.preventDefault();
    const addManey = document.getElementById('input-add-maney').value;
    const numberManey = parseFloat(addManey);
    const pinNumber = document.getElementById('input-pin-number').value;
    if(pinNumber === "1234"){
        const balanceNumber = document.getElementById('avilable-balance').innerText;
        const numberBa = parseFloat(balanceNumber);
        const newBalance = numberBa + numberManey;
        document.getElementById('avilable-balance').innerText = newBalance;
    }else{
        alert('Faild to add maney ! Place try again');
    }
    
});


