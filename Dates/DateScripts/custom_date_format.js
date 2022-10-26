"use strict";

// grabs current date/time
let currentDate = new Date();
console.log(currentDate);
let monthNumber = currentDate.getMonth();
console.log(monthNumber);
let monthDate = currentDate.getDate();
console.log(monthDate);
let monthWeekday = currentDate.getDay();
console.log(monthWeekday);
let fullYear = setFullYear();
console.log(fullYear);




const months = ["January", "February", "March", "April", 
 "May", "June", "July", "August", "September",
 "October", "November", "December"];
let monthName = months[monthNumber];
console.log(monthName);











