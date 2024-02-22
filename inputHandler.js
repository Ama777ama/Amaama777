function inputHandler(input, callback) {
    
const expression = input.split(' ');

const number1 = parseFloat(expression[0]);
const operator = expression[1];
const number2 = parseFloat(expression[2]);

callback (number1, operator, number2);
}

module.exports = inputHandler;