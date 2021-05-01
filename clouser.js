function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }

} ///amra jodi kono ekta function er vitor thake onno kono function k return ba call kori tahole ekta close environment create hoy thats call closure

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());