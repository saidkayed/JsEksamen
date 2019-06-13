//Closures and Immediatly-Invoked Function Expressions

//Closures are functions that create a private scope
//IIFE are functions that are called as they are made

//global scope
var name = "Kurt";
console.log(name);

(function outerFunction(){
    //outer function scope
    var name = "Wonnegut";
    console.log(name);
    (function innerFunction(){
        //inner function scope
        var name = "Lars";
        console.log(name);
    })();
})();


function module(){
    var price = 200;
}

//undefined because price is defined in a private scope
//console.log(price);
