const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Enter number 1: ', (num1) => {
    rl.question('Ennter number 2 : ', (num2) => {
        rl.question('Enter operator to perform operation like +, -, *, /: ', (operator) => {
            switch (operator) {
                case '+':
                    answer = Number(num1) + Number(num2);
                    break;
                case '-':
                    answer = Number(num1) - Number(num2);
                    break;
                case '*':
                    answer = Number(num1) * Number(num2);
                    break;
                case '/':
                    answer = Number(num1) / Number(num2);
                    break;
                default:
                    console.log("Choose right opertor to calculate");

            }
            console.log(`Answer is : ${answer}`);
            rl.close();
        })
    })
})