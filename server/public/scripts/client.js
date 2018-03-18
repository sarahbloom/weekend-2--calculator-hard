let storedNumber;

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery loaded');
    $('.numberButtons').on('click', firstNumber)
}

function firstNumber(){
    console.log("success!");
    let storedNumber = $(this).data("number")
    console.log(storedNumber);
}
