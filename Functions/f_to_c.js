function fahrenheitToCelsius(currentTemperature, celsiusTemperature) {
    let convert = ((currentTemperature - 32) * 5/9 );
    console.log(convert)
}
let theCurrentTemperature = 92;
let theCelsiusTemperature = ((theCurrentTemperature - 32) * 5/9);
console.log(" The fahrenheit temperature is " + theCurrentTemperature + " and the converted Celsius temperature is " + theCelsiusTemperature);

fahrenheitToCelsius();




function celsiusToFahrenheit(celsiusCurrentTemperature, fahrenheitTemperature) {
    let convert = ((celsiusCurrentTemperature * 9/5) + 32 );
    console.log(convert)
}

let theCelsiusCurrentTemperature = 100;
let theFahrenheitTemperature = ((theCelsiusCurrentTemperature * 9/5) + 32 );
console.log(" The Celsius temperature is " + theCelsiusCurrentTemperature + " and the converted Fahrenheit temperature is " + theFahrenheitTemperature);

celsiusToFahrenheit();







