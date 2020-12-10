// function constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// prototype

Person.prototype.greet = function(){
    console.log('Siemano '+ this.firstName + ' ' + this.lastName + '!')
}

var chris  = new Person('Krzysztof', 'Bednarczyk');
console.log(chris.firstName);

chris.greet();

var anna = new Person('Anna', 'Waryniolska');

anna.greet();


console.log(chris.__proto__);
console.log(anna.__proto__);
console.log(chris.__proto__ === anna.__proto__);