//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 1:

function sumOfMultiple(limit) {
    var i, sum = 0;
    for(i = 3; i < limit; i++) {
        if(i % 3 === 0 ||i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log("Answer is: " + sumOfMultiple(1000));
