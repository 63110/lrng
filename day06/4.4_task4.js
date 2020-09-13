"use sctrict";
let calculator = {
    read (){
        this.a = +prompt ("first znachnie");
        this.b = +prompt ("second znachnie");
         },
    sum() {
        return this.a + this.b;
    },
     mul()
     {
        return this.a * this.b;
     }
  };
  alert(calculator.read() );
  alert( calculator.sum() );
  alert( calculator.mul() );