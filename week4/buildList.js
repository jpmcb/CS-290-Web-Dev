// John McBride
// Activity - Week 4

// Builds and returns a list of functions with closures
function buildList(list) {
    var result = [];

    // Loop through the parameter list and generate functions
    // from that list
    for (var i = 0; i < list.length; i++) {

        // Having a really hard time getting this to work ... 
        var item = 'item' + function(x){
            return list[x];
        }(i);

        // 2 layers of closure that generates the proper number
        result.push( function(x){
            return function(){console.log(item + ' ' + list[x])};
        }(i) );
    }
    return result;
}
 
// For testing the closures in the build list
function testList() {
    var fnlist = buildList([1,2,3]);

    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

// Call the the test cases
testList();
