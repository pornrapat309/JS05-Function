// factoral => n!
// 5! => 5*4*3*2*1

const calFactorial = (num) => {
    let fac = 1;
    for (i = 1; i <= num; i++) {
        fac *= i;
    }
    console.log(`Factorial of ${num} = ${fac}`);
}
calFactorial(5);
calFactorial(7);
calFactorial(10);