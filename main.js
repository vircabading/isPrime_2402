///////////////////////////////////////////
// Is Prime Main Application
///////////////////////////////////////////

let isPrime = (num) => {
    // console.log("*** isPrime function: " + num + "\n");
    for (let i=2; i<num/2; i++) {
        // console.log(i);
        if ( num % i == 0 ) {
            return false;
        }
    }
    return true;
}

console.log("////////////////////////////////////");
console.log("Is Prime Application\n");

console.log("Is 11 a prime number?");
console.log(isPrime(11));

console.log("\nIs 6 a prime number?");
console.log(isPrime(6));

console.log("\nIs 45 a prime number?");
console.log(isPrime(45));

console.log("\nIs 47 a prime number?");
console.log(isPrime(47));

console.log("\nIs 97 a prime number?");
console.log(isPrime(97));

console.log("\nIs 99 a prime number?");
console.log(isPrime(99));