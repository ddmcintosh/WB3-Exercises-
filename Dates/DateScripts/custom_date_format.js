"use strict";

// grabs current date/time
let currentDate = new Date();
console.log(currentDate);
let monthDate = currentDate.getDate()
console.log(monthDate);
let monthNumber = currentDate.getMonth();
console.log(monthNumber);
let fullYear = currentDate.getFullYear();
console.log(fullYear);
let monthWeekday = currentDate.getDay();
console.log(monthWeekday);





const months = ["January", "February", "March", "April", 
 "May", "June", "July", "August", "September",
 "October", "November", "December"];
let monthName = months[monthNumber];
console.log(monthName);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(currentDate + "-" + monthDate + "-" + fullYear + " (" + monthWeekday+ ")");











