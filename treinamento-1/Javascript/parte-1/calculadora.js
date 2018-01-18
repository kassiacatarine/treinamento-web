let values = [];// = [10, 3, 4, 3];
let roles = []; //= ['+', '-', '+'];

// VIEWS



function printExpression(values, roles) {
    let cont = 0;
    let expression = "";
    
    if(!arrayEmpty()){
        do {
            if(values.length - 1 == cont){
                expression += values[cont];
            }else{
                expression += values[cont] + ' ' +  roles[cont] + ' ';
            }
            cont++;
        } while (cont < values.length);
        console.log(expression);
    }
}


// VALIDATIONS


function arrayEmpty() {
    values || roles ? alert('Expressão vazia, impossível imprimir!') : console.log('Expressão Impressa');
}


//FUNCTIONS


function pushOperation(number, role) {
    if (role == '=') {
        values.push(number);
        calculateExpression(values, roles);
    } else {
        values.push(number);
        roles.push(role);
    }
}

function clearOperation() {
    values.length = 0;
    roles.length = 0;
}


// CALCULATION


function calculateExpression(values, roles) {
    let cont = 0;

    do {
        let operator = roles.shift();
        if(operator == '+'){
            values.unshift(sum(values.shift(), values.shift()));
        } else if (operator == '-') {
            values.unshift(subtraction(values.shift(), values.shift()));
        } else if (operator == '*') {
            values.unshift(multiplication(values.shift(), values.shift()));
        } else if (operator == '/') {
            values.unshift(division(values.shift(), values.shift()));
        }
    } while (roles.length != 0);

    return values[0];
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



pushOperation(1, '+');
pushOperation(2, '+');
pushOperation(2, '=');

printExpression(values, roles);