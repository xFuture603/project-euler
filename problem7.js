//project euler code for the project euler problems
// user: Daniel "xFuture"

//problem 7:

(function euler007() {
    var primes = [2];
    var i = 3;
    var j = 2;
    var maxPrimes = 10001;
  
    while (primes.length < maxPrimes) {
      while (i % j !== 0) {
        j++;
        if ( j === i ) {
          primes.push(i);
          break;
        }
      }
  
      i++;
      j = 2;
    }
  
    console.log(primes[maxPrimes - 1]);
    return primes[maxPrimes - 1];
  }());