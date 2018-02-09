//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 3:

function largestPrimeFactor(n) {
    var d = Math.ceil(Math.sqrt(n));

    function isPrime(n) {
        var i, limit = Math.ceil(Math.sqrt(n));
        for(i = 3; i <=limit; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true; 
    }
    d = (d & 1 === 0) ? d -1 : d;

    while(!(n % d === 0 && isPrime(d))) {
        d -= 2;
    }
    return d;
}

console.log(largestPrimeFactor(600851475143));