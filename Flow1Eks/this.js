//this is the object that owns the js code in the given context
//If we are in a certain scope or object, 'this' refers to the object/function we are in


//'this' in global scope
//within global scope 'this' refers to the window(in browser)
//mostly similar to java

//console.log(this === window); //true in browser


this.table = "window table";
//console.log(window.table); // "window table" in browser

this.garage = {
    table: "garage table"
}

console.log(this.garage.table);
//console.log(window.garage.table); //same in browser

//'this' inside object and inside method

let myRoom = {
    table: "myTable",
    cleanTable(){
        //'this' works because we are inside the myRoom scope
        console.log(`cleaning ${this.table}`);
    }
}
//private variable so this.myRoom.table will not work
console.log(myRoom.table) //works

myRoom.cleanTable();

//In java 'this' refers to current instance of object
//In js functions are objects and the value of 'this' depends on how the function is called