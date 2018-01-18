var Calculadora = function() {}


Calculadora.prototype.soma = function(first, second) {
    return first + second;
};

Calculadora.prototype.subtracao = function(first, second) {
    return first - second;
}

Calculadora.prototype.multiplicacao = function(first, second) {
    return first * second;
}

Calculadora.prototype.subtracao = function(first, second) {
    return first / second;
}

// var cal = new Calculadora()
// cal.soma();