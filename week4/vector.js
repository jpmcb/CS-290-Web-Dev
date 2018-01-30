// Your code here.
function Vector(inX, inY){
  	this.x= inX,
    this.y= inY,
  
 	this.plus= function(vecOne, vecTwo){
    	return new Vector((vecOne.x + vecTwo.x), (vecOne.y + vecTwo.y));	
    },
  	this.minus= function(vecOne, vecTwo){
    	return new Vector((vecOne.x - vecTwo.x), (vecOne.y - vecOne.y));
    },
  
  	this.length= (Math.sqrt((this.x * this.x) + (this.y * this.y)))
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
