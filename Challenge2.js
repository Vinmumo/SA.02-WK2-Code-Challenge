function getNums(){
    const num1 = prompt('Enter a the first number');                      
    const num2 = prompt('Enter a the second number');               // prompts user to enter two numbers
    const arr = [];
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            arr.push(i);                                   // returns numbers when the second number is greater than the first
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            arr.push(i);                                 // // returns numbers when the first number is greater than the second
        }
    }
    return arr;                //returns final array of numbers
}
console.log(getNums())