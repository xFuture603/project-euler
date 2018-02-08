//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 2:

function sumOfEvens(limit) {
    var temp, a = 0, b = 1, sum = 0;
    while(b < limit){
        temp = a;
        a = b;
        b += temp;
        if ((b & 1) === 0) {
            sum += b;
        }
    }
    return sum;
}
console.log("Answer: " + sumOfEvens(4e6));