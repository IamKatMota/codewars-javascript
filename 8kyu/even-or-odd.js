//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


//solution 1
function evenOrOdd(number) {
    if (number % 2 === 0){
    return 'Even'
    } else{
    return 'Odd'
    }
}


//solution2
const evenOrOdd = n => n % 2 === 0 ? `Even` : `Odd`