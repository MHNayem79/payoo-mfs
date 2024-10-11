// 1st step is add an event handeler to the add money button inside the form
document.getElementById('add-money-btn').addEventListener('click',function(event){
    // prevent page relode after form submit
    event.preventDefault();
    //step 2 how much money i want to add type in ammount input
    let addmoneyinput=document.getElementById('input-add-money').value;
    console.log(addmoneyinput);
    // pin section
    let inputpin=document.getElementById('input-pin').value;
    console.log(inputpin)

})