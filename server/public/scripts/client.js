let storedNumber;
let firstNumber = {};

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery loaded');
    clickListeners();
}

function clickListeners(){
    $('.numberButtons').on('click', submitNumber);
    $('.calculate').on('click', submitOperator);
}

function submitNumber(){
    let storedNumber = $(this).data("number");
    console.log(storedNumber);
    firstNumber = { firstNumber: storedNumber };
    console.log(firstNumber);
}

function submitOperator() {
    storedNumber = "";
    operator = $(this).data("operator");
    console.log(operator);   
    return operator;
}



    