// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


//1st solution
function numberToString(num) {
    let string = num.toString()
    return string
}
numberToString(8);



//2nd solution
const numberToString= (num)=> {
    return num.toString();
}