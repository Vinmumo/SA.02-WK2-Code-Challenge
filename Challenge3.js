function getArr(){                // prompts user to enter numbers
    const arr = prompt('Enter numbers each separated by space:')
    const arr1 = arr.split(' ').map(num => parseFloat(num.trim()));
    return arr1            // returns the input numbers in an array
}
function prime(num){      // check if number is a prime number
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let 1 = 2; i <= Math.sqrt(num); i++){    // for loop to check if number is divisible by any number less than its squareroot
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
function getPrimes(arr){
    const arr = getArr();
    const newArr = arr.filter(num => prime(num));
    return newArr;        // returns a new array with only prime numbers
}
console.log(getPrimes());
