function Greetr(){
    this.greeting = 'This is pattern numero IV';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr; // passing the function constructor