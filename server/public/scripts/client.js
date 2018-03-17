console.log('JS');

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery loaded');
    $('.numberButtons').on('click', numberButtons)
}

function numberButtons(){
    console.log(button.value);
    
}
