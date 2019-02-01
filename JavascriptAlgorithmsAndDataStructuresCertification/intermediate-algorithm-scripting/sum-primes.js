
const erasthenes = (num) => {
    let range = Array.from({length: num + 1},(v,k) => k);
    range.splice(0,2); // remove 0 and 1
    var counter = 0;
    var primes = [];
    while (counter < Math.sqrt(num)){
        const nextPrime = range.shift();
        range = range.filter(x => !(x % nextPrime === 0)) ;
        primes.push(nextPrime);
        counter++ ;
    }
    return primes.concat(range);
};

function sumPrimes(num) {
    return erasthanes(num).reduce((acc, itm) =>  acc + itm, 0);

}

