// John McBride
// CS 290 - Winter 2018

// recursive function that will return true of two values are the same
function deepEqual(obj1, obj2) {
    
    // Check to see if the two comparrisons are both objects
    if(typeof(obj1) == "object" && typeof(obj2) == "object") {
        
        // itterate through the objects properties
        for(var props in obj1) {
            // check to see if the other object has that property
            // (pulled the.hasOwnProperty from the MDN resource)
            if(obj2.hasOwnProperty(props)){

                // Recursively call the function to go deeper and check
                // the two properties are the same
                if(deepEqual(obj1[props], obj2[props])) {
                    return true;
                }
            } else {
                // The other object dosen't have the same property
                return false;
            }
        }

        return false;

    // The two comparrisons are not both objects. Check
    // to see if they're the same
    } else if (obj1 === obj2) {
        return true;
    
    // The comparrison failed and they are not the same
    } else {
        return false;
    }
}

// Given object
var obj = {
    here: {
        is: "an"
    },
    object: 2
};

// Console output from the book
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
