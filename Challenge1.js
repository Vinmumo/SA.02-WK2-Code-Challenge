function getStr(){                                                   //function to prompt user for a string
    const str = prompt('Enter a string:');
    if (typeof str !== "string"){
        return "Invalid Input. Please enter a string"
         }else {
            return str;                           //returns string
         }
        }
   
function swapCase(){            //function to swap case for provided string
    const str = getStr();
    return str.split('').map((char) => {                     //splits string into individual characters ans swaps the case of each character
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
console.log(swapCase());

 