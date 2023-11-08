const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

// This function piggybacks off the other test function and leverages the property of the negative
// portion of the Fibonacci sequence being every other term being negative. This starts at fib(-2),
// which is index 2 with how I've set it up. So, the for loop simply makes every other term negative.

const test =
    jsc.forall("nat", function(n) {
        var test = fibTest(n)
        return fibonacci(n) == test[test.length-1];
        
    });
jsc.assert(test, {tests: 1000});