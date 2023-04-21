function primeFactors(n) {
    let factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  

  let n = 84;
  let factors = primeFactors(n);
  console.log(`The prime factors of ${n} are: ${factors}`);
  