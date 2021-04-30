// import using require
var Shape = require("./shape.js");
// declare class

class Circle extends Shape{
     
     function calculateArea(r){
        return r*r;
     }
  
}

// export class using module.exports
