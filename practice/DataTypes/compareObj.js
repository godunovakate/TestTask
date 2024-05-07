'use strict'

function compareObj (obj1, obj2) {
    for (let item in obj2) {
        if (obj1[item] !== obj2[item]) {
            return false;
        }
    }
    return true;
}

let obj1 = {
    name: 'Pete',
    age: 23,
}

let obj2 = {
    name: 'Pete',
}

console.log(compareObj(obj1, obj2));