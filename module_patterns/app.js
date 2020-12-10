var greet = require('./greet1');

greet();

var greet2 = require('./greet2').greet;

greet2();

var greet3 = require('./greet3');

greet3.greet();
greet3.greeting = 'Changed the text'; // changed by reference

var greet3b = require('./greet3');  // new variable from the same module
greet3b.greet();                    // new value outputed because was passed by reference in require

var Greet = require('./greet4');    // giving the ability to create objects
var grtr = new Greet();             // creating object from function constructor
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();