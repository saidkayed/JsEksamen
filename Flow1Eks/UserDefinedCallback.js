//In js you can pass functions as arguments into functions, these are called callbacks
//Js is single threaded so callbacks can be used to create order

//No callback

(function first(){
    console.log(1);
})();
(function second(){
    console.log(2);
})();

//callback

(function firstDelay(){
    // Simulate a code delay
    setTimeout( function() {
        console.log(1);
    }, 500 );
    
    })();
    
    (function secondDelay(){
        console.log(2);
    })();

//why?

function firstDelay(callback){
// Simulate a code delay
setTimeout( function() {
    console.log(1);
    callback();
}, 500 );

}

function secondDelay(){
    console.log(2);
}
firstDelay(secondDelay);

