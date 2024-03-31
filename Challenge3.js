function getArr(){                // prompts user to enter numbers
    const arr = prompt('Enter numbers each separated by space:')
    const arr1 = arr.split(' ').map(num => parseFloat(num.trim()));
    return arr1            // returns the input numbers in an array
}
