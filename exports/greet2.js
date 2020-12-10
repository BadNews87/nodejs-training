exports.greet = function(){     // mutating the object to not break the reference
    console.log('Hello');
}

console.log(exports);
console.log(module.exports);