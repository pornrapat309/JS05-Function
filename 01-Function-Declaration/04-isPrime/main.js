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
checkPrime(2);
checkPrime(3);
checkPrime(5);