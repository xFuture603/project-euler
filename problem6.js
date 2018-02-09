//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 6:

var i, n, sum = 0; 
for(i = 1; i < 100; i++) {
    for(n = 100; n > i; n --){
        sum += n * i
    }
}

console.log("result of this problem is: " + (sum * 2));
