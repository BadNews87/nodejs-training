// function statement

function greet() {
    console.log('Hello ziomek');
}
greet();

// functions are first-class - so we can pass them around as values

function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression - assigning anonymous functions to variables

var greetMe = function(){
    console.log('Ej siemano Krzysztof');
}
greetMe();

// it's first-class
logGreeting(greetMe);

// use a function on the fly

logGreeting(function(){
    console.log('W stylu Łabędzia :D');
});
