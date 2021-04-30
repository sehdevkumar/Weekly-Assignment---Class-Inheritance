

 class Shape{
    var color="";
    var area = 0;
     function drawShape(color){
        this.color = color;
     }

   function calculateArea(r){
       area = r*r;
   }

}

module.exports.Shape = Shape;
