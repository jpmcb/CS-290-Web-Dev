// John McBride
// Week 4 activities

function dialog(inString) {
    return function(quote) {
        return inString + ' says "' + quote + '"';
    }
}

var Donald = {
    name: "Donald Duck"
};

Donald.speak = dialog("Donald Duck");

console.log(Donald.speak("Hello there"));
