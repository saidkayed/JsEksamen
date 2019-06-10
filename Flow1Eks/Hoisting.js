//Hoisting is a JavaScript mechanism where variables and function declarations are moved 
//to the top of their scope before code execution.

//Variable Hoisting

//Error because the variable isnt defined
//console.log(iDontExist);

//Only the var delcaration is hoisted to the top as a global variable
console.log(iAmHoisted);
var iAmHoisted = 3;
console.log(iAmHoisted);

//Can be assigned before declaration because the var is hoisted
iAmHoisted2 = 6;
console.log(iAmHoisted2);
var iAmHoisted2;

//Function Hoisting

console.log(hoistedFunction());
//Error because the anonymous function in anoVar isnt Hoisted
//console.log(anoVar());
console.log(anoVar);

//Entire named function gets hoisted to the top, so we can call it no matter where it is made
function hoistedFunction(){
    var a = 10;
    return a;
}

//Anonymous functions wont get Hoisted
var anoVar = function(){
    var a = 20;
    return a;
}