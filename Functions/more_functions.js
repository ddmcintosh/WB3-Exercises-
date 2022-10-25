function displayMailingLabel(name, address, city, state, zip) {
    let message = " My name is " +  name + " I live at " + address + " the city is " + city + " the state is " + state + " and the zipcode is " + zip
    console.log(message);

}
let thename = "Deavion"
let theaddress = "80 Broad St"
let thecity = "NYC"
let thestate = "NY"
let thezip = "10004"
displayMailingLabel(thename, theaddress, thecity, thestate, thezip);


function displayMailingLabel(name, address, city, state, zip) {
    let message = " My name is " +  name + " I live at " + address + " the city is " + city + " the state is " + state + " and the zipcode is " + zip
    console.log(message);
} 

let thename2 = "Marie"
let theaddress2 = "85 Broad St"
let thecity2 = "NYC"
let thestate2 = "NY"
let thezip2 = "10000"

console.log(thename2);
console.log(theaddress2);
console.log(thecity2);
console.log(thestate2);
console.log(thezip2);

displayMailingLabel(thename2, theaddress2, thecity2, thestate2, thezip2);




function displayAddNumbers(num1, num2) {
    let add = num1 + num2;
   console.log(num1 + "+" + num2 + "=" + add )

}
displayAddNumbers(5, 5);


function displayReceipt(totalDue, amountPaid ) {
    let message = " The total due is " + totalDue + ", and the amount paid is " + amountPaid + " and the change due is $3 " 
    console.log(message);

}
let thetotalDue = "$27.00"
let theamountPaid = "$30.00"
displayReceipt(thetotalDue, theamountPaid);





