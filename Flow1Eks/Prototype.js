//When a function is made the js engine adds a protoype to the function

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var person1 = new Person("Kurt", "Wonnegut");
var person2 = new Person("Tobias", "Jensen");

console.log(person1);
console.log(person2);

console.log(Person.prototype);

//our person objects also contain the Person.prototype because they point to the same object(the constructor)
console.log(person1.__proto__ === Person.prototype);

//With prototype we can add new values to constructors (browser prototype)
Person.prototype.age = 23;
console.log(person1.age);
//downside to prototype is that the value is shared between all objects with the given constructor
