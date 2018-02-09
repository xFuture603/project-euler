//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 5:

var from = 1, target = 20, primes = {}, result = 1;

for(var divider = from; divider <= target; divider++) {
  (function(newTarget) {
    var i = 2, dividersPrimes = {};
    while(i <= newTarget) {
      while(newTarget % i === 0) {
        newTarget = newTarget / i;
        if(!dividersPrimes[i]) {
          dividersPrimes[i] = 1;
        }
        else {
          dividersPrimes[i]++;
        }
      }
      i++;
    }
    for(var prime in dividersPrimes) {
      if(dividersPrimes.hasOwnProperty(prime) 
        && (!primes[prime] 
          || primes[prime] < dividersPrimes[prime])) {
        primes[prime] = dividersPrimes[prime];
      }
    }
  })(divider)
}
for(var prime in primes) {
  if(primes.hasOwnProperty(prime)) {
    result = result * Math.pow(prime,primes[prime])
  }
}
console.log(result);