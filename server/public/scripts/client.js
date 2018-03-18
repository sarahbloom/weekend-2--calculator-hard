let storedNumber;
let equation = {};
let operator;

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery loaded');
    clickListeners();
}

function clickListeners(){
    $('.numberButtons').on('click', submitNumber);
    $('.calculate').on('click', submitOperator);
    $('#submit').on('click', submitSecondnumber)
}

function submitNumber(){
    storedNumber = $(this).data("number");
    console.log(storedNumber);
}

function submitOperator() {
    equation = { firstNumber: storedNumber }
    storedNumber = "";
    operator = $(this).data("operator");
    equation.operator = operator;
    console.log(equation);   
}

function submitSecondnumber(){
    console.log('clicked submit');
    equation.secondNumber = storedNumber;
    $.ajax({
        type: "POST",
        data: equation,
        url: "/equation"
    }).done(function(response){
        console.log('success!');
    })
}




    