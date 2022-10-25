"use strict";

function parseAndDisplayName(fullname){
    console.log(`------------------------------------------`)
    console.log(`Displaying results for input: ${fullname}`);

    let indexOfFirstSpace = fullname.indexOf(" ");
    let doesHaveAtLeastOneSpace = (indexOfFirstSpace != -1);

    //console.log(`indexOfFirstSpace: ${indexOfFirstSpace}`)
    //console.log(`doesHaveAtLeastOneSpace: ${doesHaveAtLeastOneSpace}`)

    let areFirstAndLastIndexOfSpaceIdentical = (fullname.indexOf(" ") == fullname.lastIndexOf(" "))
    //console.log(`areFirstAndLastIndexOfSpaceIdentical  ${areFirstAndLastIndexOfSpaceIdentical}`);

    //if only one name...
    if(!doesHaveAtLeastOneSpace){
        console.log(`Only Name: ${fullname}`);
    }

    //if more than one name, exactly two names

    else if(areFirstAndLastIndexOfSpaceIdentical){
        let firstName = fullname.substring(0, indexOfFirstSpace);
        console.log(`First Name:  ${firstName}`);


        let lastname = fullname.substring(indexOfFirstSpace + 1);
        console.log(`Last Name:    ${lastname}`);

 }

    //if other (3+ names)
else
{
    let indexOfLastSpace = fullname.lastIndexOf(" ");

    let firstName = fullname.substring(0, indexOfFirstSpace);
    console.log(`First Name: ${firstName}`);

    let middlename = fullname.substring(indexOfFirstSpace + 1, indexOfLastSpace);
    console.log(`Middle Name:  ${middlename}`);

    let lastname = fullname.substring(indexOfLastSpace + 1);
    console.log(`Last Name:   ${lastname}`);

}

console.log(``);

}


parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
