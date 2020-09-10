"use strict";

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj)
{
    for (let key in obj) {
    if (typeof obj[key] === 'number');
    let result = obj[key] * 2;
    }

console.log(multiplyNumeric(obj));
  }
    //console.log(obj[key]);
    // let result = multiplyNumeric[key]



// после вызова функции
/*
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/