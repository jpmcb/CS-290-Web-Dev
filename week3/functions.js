// John McBride
// CS 290 - Winter 2018

// This works because the function definition is hoiseted up
// and the program runs appropriately
myFunction();

// Running this will crash the program. Won't work because
// the variable hasn't been linked to the function yet
// cubed(2);

function myFunction() {
    console.log("Hello! I am doing stuff!");
}

var cubed = function(x) {
    return x * x * x;
}

// This will work
console.log(cubed(2));
