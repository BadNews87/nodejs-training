// passing by value

function change(b){
    b = 2
}

var a  = 1;

change(a);

console.log(a); // logs out 1 because a copy is created in memory when passing a primitive value like a number


// passing by reference

function changeObj(d){
    d.prop1 = function(){},
    d.prop2 = {},
    d.prop3 = 1234
}

var c = {};
c.prop1 = 1;

console.log(c);

changeObj(c);

console.log(c); // changes the object c because object are passed by reference so the function is working on the direct memory source