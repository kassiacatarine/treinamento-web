let values = [];// = [10, 3, 4, 3];
let roles = []; //= ['+', '-', '+'];
let number;

// VALIDATIONS


function numberIsEmpty() {
    if ((number == null || number == undefined || number == 0)) {
        return true;
    }
    return false;
}

function arrayIsEmpty() {
    if (values.length != 0 && roles.length != 0){
        return false;
    }
    return true;
}


// EVENTS


window.onload = clearOperation();


// EVENTS LISTENERS --- BUTTONS NUMBERS


let buttonsNumbers = document.getElementsByClassName('btn-number');

for (const btn of buttonsNumbers) {
    btn.addEventListener('click', elementClicked);
}


function elementClicked() {

    if (numberIsEmpty() && this.value == '='){
        alert("Operação Inválida! Tente Adicionar um número!");
    }else{
        if (!numberIsEmpty() && this.value == '='){
            values.push(number);
            calculateExpression();
        } else {
            if(numberIsEmpty() && this.value != '='){
                number = this.value;
            }else if (!numberIsEmpty() && this.value != '=') {
                number += this.value;
            }
            printExpression();
        }
    }
}


// EVENT LISTENERS --- BUTTONS OPERATIONS


let buttonsOperations = document.getElementsByClassName('btn-function');

for (const btn of buttonsOperations) {
    btn.addEventListener('click', pushOperation);
}


// DISPLAY


function displayPrimary(item) {
    document.getElementById('display-primary').innerText = item;
}

function displaySecondary(item) {
    document.getElementById('display-secondary').innerText = item;
}


// VIEWS


function printExpression() {
    let expression = "";

    if (!arrayIsEmpty()) {
        for (let i = 0; i < values.length; i++) {
            const e = values[i];
            i < roles.length ? expression += e + ' ' + roles[i] + ' ' : expression += e;
        }
        if (!numberIsEmpty()) {
            displaySecondary(expression + number);
        } else {
            displaySecondary(expression);
        }
    } else {
        displaySecondary(number);
    }
}


//FUNCTIONS


function pushOperation() {
    document.getElementById('display-primary').innerHTML = '<br>';
    values.push(number);
    roles.push(this.value);
    number = 0;
    printExpression();
}


function clearOperation() {
    values.length = 0;
    roles.length = 0;
    number = 0;
    document.getElementById('display-primary').innerHTML = '<br>';
    document.getElementById('display-secondary').innerHTML = '<br>';
}


// CALCULATION


function calculateExpression() {

    do {
        let operator = roles.shift();
        
        if(operator == '+'){
            values.unshift(sum(parseInt(values.shift()), parseInt(values.shift())));
        } else if (operator == '-') {
            values.unshift(subtraction(parseInt(values.shift()), parseInt(values.shift())));
        } else if (operator == '*') {
            values.unshift(multiplication(parseInt(values.shift()), parseInt(values.shift())));
        } else if (operator == '/') {
            values.unshift(division(parseInt(values.shift()), parseInt(values.shift())));
        }
    } while (roles.length != 0);
    
    displayPrimary('= ' + values[0]);
    number = parseInt(values[0]);
    values.length = 0;
}


// FUNCTIONS


function sum(first, second) {
    return first + second;
}

function subtraction(first, second) {
    return first - second;
}

function multiplication(first, second) {
    return first * second;
}

function division(first, second) {
    return first / second;
}