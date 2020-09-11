"use strict";

let salaries = {
    John: 130,
    Ann: 100,
    Pete: 160,
};
let sum = 0;
function salEmpty(salaries) {
    for (let key in salaries) 
    if (sum==0) {
        return "loh y tebya 0";
     }
    return false;
    }
sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(salEmpty(salaries));
console.log(sum);