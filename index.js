(function fizzbuzz() {
    'use strict';

    const START = 0;
    const LENGTH = 100;

    const isZero = x => x === 0;
    const isDivisibleBy3 = x => x % 3 === 0;
    const isDivisibleBy5 = x => x % 5 === 0;
    const isDivisibleBy3And5 = x => isDivisibleBy3(x) && isDivisibleBy5(x);

    for (let i = START; i <= (LENGTH - 1); i ++) {
        let x = isZero(i) ?
            i.toString()
        : isDivisibleBy3And5(i) ?
            "FizzBuzz"
        : isDivisibleBy3(i) ?
            "Fizz"
        : isDivisibleBy5(i) ?
            "Buzz"
        :   i.toString();

        console.log(`${i.toString()}: ${x}`);
    }
})();
