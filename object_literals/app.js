// object literal syntax
var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log(this.firstName + ' ' + this.lastName); // "this" keyword refers to properties of the person object
    }
}

person.greet(); // executes the function because of () which invokes the function - you'll receive the result of the function

console.log(person['lastName']); // access object property with property name in '' and using []

console.log(person.greet); // will log out Function not it's value/result