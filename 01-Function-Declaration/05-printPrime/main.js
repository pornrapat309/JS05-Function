function checkPrime(num) {
    let isPrime = true;
    for (let divider = 2; divider < num; divider++) {
        if ( num % divider == 0 ) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(`${num} is Prime`);
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }  
}

printPrime(14);