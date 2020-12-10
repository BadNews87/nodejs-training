var firstName = 'Jane';

(function(lastName){
    var firstName = 'Johny'; // variable doesn't change because it's protected by function scope
    console.log(firstName);
    console.log(lastName);
}('Deep')); /* immediately invoked function expression (iffe)  () is invokinge the function at once,
                giving Deep as the function parameter for lastName */

console.log(firstName); // will still have the value of Jane since the scope of the function doesn't affect it