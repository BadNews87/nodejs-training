// revealing module pattern - exposing only the properties and methods you want via an returned object

var greeting = 'Revealing module pattern!'

var greet = function(){
    console.log(greeting);
}

module.exports = {
    greet
}