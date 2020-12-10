function Greetr(){
    this.greeting = 'This is pattern number 3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();