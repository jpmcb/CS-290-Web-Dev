// John McBride
// Week 4 Activity - Functions

function forEach(arr, work) {
    for(var i = 0; i < arr.length; i++) {
        work(arr[i]);
    }
}

var myArr = [1, 2, 3, 4, 5];
var mySum = 0;

function sum(x) {
    mySum += x;
}

forEach(myArr, sum);

console.log(mySum);
