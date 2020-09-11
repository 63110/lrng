"use strict";

let salaries = {
    John: 0,
    Ann: 10,
    Pete: 0,
};

function summ(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
console.log(summ(salaries));

if (summ(salaries)== 0) {
    console.log("loh y tebya 0");
}
