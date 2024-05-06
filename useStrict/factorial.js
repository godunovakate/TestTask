'use strict'

function factorial (number) {
    let value = 1;
        for (let i=1; i<=number; i++) {
            value *=i; 
        }
    return value;
}

let number = 5;

console.log(factorial(number));