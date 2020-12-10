exports = function(){           // assigning value to exports object breaks the reference and creates a different object
    console.log('Hello');
}

console.log(exports);
console.log(module.exports);