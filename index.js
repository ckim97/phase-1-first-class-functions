function receivesAFunction(callback) {
    console.log("Hello");
    callback();
}

function returnsANamedFunction() {
    function sayGoodbye() {
        console.log("Goodbye");
    }
    return sayGoodbye;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("See you tomorrow");
    }
}