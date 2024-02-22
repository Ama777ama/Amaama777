let add = require('./add')
let min = require('./min')
let del = require('./del')
let degree = require('./degree')
let multiplication = require('./multiplication')
let inputHandler = require('./inputHandler')

const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    userInput.question('Введите значения и оператор через пробел (например 2 + 3): ',
        (input) => {
            inputHandler(input, (number1, operator, number2) => {

                let result;
                switch (operator) {
                    case '+':
                    result = add(number1, number2)    
                    
                    case '-':
                    result = min(number1, number2)    
                    
                    case '/':
                    result = del(number1, number2)
                        
                    case '*':
                    result = multiplication(number1, number2)
                        
                    case '**':
                    result = degree(number1, number2)    
                    break;
                
                    default:
                        console.log ('Неверная операция');
                        userInput.close;
                        return;
                }
                console.log('Результат'  + result);
                //calculator():
            })
});
}

calculator();