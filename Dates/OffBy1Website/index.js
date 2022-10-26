// document has strict laws
"use strict"

//when the window loads this will be initated
window.onload = init;


//defining init and linking button 

function init()
{
    const btn = document.getElementById("btn");
    btn.onclick = btnOnClicked;
}



// what happens when button is clicked

function btnOnClicked() {
console.log("The button was clicked");

//dateString is what person is putting in 
 let dateString = document.getElementById(dateField.value);
 let date = new Date(dateString);
 console.log(new Date(dateString));
 let output = document.getElementById("output");
 output.innerHTML = new Date(dateString);


}





