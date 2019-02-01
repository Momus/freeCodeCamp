const eratosthenes = (num) => {
    let range = Array.from({length: num + 1},(v,k) => k);
    range.splice(0,2); // remove 0 and 1
    let counter = 0;
    let primes = [];
    while (counter < Math.sqrt(num)){
        const nextPrime = range.shift();
        range = range.filter(x => !(x % nextPrime === 0)) ;
        primes.push(nextPrime);
        counter++ ;
    }
    return primes.concat(range);
};

const  factor = (num) => {
    if (num <= 3) return {[num]: 1};
    const primes = eratosthenes(Math.floor(num));
    let factors = {};
    primes.forEach(p => {
        let thisNum = num;
        while (thisNum % p === 0){
            factors[p] ? factors[p] = factors[p] + 1 : factors[p] = 1
            thisNum /= p;
        }
    })
    return factors
}


function smallestCommons(arr) {
  let commonFactors = {};
  const span = Math.abs(arr[1] - arr[0]) + 1;
  let range = Array.from({length: span},(v,k) => k + Math.min(arr[0], arr[1]));
  let factors = range.map(n => factor(n));
  factors.forEach((f) => {
    Object.keys(f).forEach((k) => {
        commonFactors.hasOwnProperty(k) ?
            commonFactors[k] = Math.max(commonFactors[k], f[k]) :
            commonFactors[k] = 1;
    })
  })
    return Object.keys(commonFactors).
        reduce((acc, k) => acc * Math.pow(Number(k), commonFactors[k]), 1);
}

