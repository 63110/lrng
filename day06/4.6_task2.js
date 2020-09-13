function Calculator() {

this.read=function () {
    this.a = +prompt('a?');
    this.b = +prompt('b?');
},
this.sum= function(){
    this.a + this.b;
    return this;
},
this.mul= function(){
    this.a * this.b;
    return this;
}
}

let calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );