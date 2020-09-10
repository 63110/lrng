"use strict";
function isEmpty(obj) {
    for (let obj in schedule);
    if (Object.keys(schedule).length === 0) {
        return true;
    }
    return false;
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
