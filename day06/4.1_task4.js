"use strict";

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
        obj[key] *= 2;
    }
}
}
multiplyNumeric(menu);
  
console.log(menu.width)
menu = {
    width: 400,
    height: 600,
    title: "My menu",
};
