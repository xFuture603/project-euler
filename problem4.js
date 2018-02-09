//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 4:

function largestPal(digits) {
    var i, max, min, d, inf, sup, limit, number = 0;
    for(i = 1; i < digits; i+= 1) {
        number = 10 * number + 9;
    }
    inf = number;
    sup = 10 * number + 9;

    function isPal(n) {
        var p = 0, q = n, r;
        while(n > 0) {
            r = n % 10; // return last number in n(number)
            p = 10 * p + r; // return the last number
            n = Math.floor( n / 10);
        }
        return p === q; 
    }
    for(max = sup * sup, min = inf * inf; max > min; max -= 1){
        if(isPal(max)) {
            limit = Math.ceil(Math.sqrt(max));
            d = sup;
            while(d >= limit) {
                if(max % d === 0 && max / d > inf) {
                    return max;
                }
                d -= 1;
            }
        }
    }
    return NaN;
}

console.log(largestPal(3));