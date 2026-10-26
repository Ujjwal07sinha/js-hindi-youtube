let score = "200"

console.log(typeof score)   //string

let newScore= Number(score)
console.log(typeof newScore)   //number
console.log(newScore)   //200

//score= 200abc= convert to number => NaN
//score= undefined= convert to number => NaN(not a number)
//score= true/false= convert to number => 1/0

let loggedIn= 1
let bolleanloggedIn= Boolean(loggedIn)
console.log(typeof bolleanloggedIn)   //boolean
console.log(bolleanloggedIn)   //true

//1 =>true; 0=>false
// "" =>false
//"Ujjwal" =>true
//null =>false

let number= 123
let stringNumber= String(number)
console.log(typeof stringNumber)   //string
console.log(stringNumber)   //123


// **************OPERATIONS**********************
let value= 10
let negValue= -value
console.log(negValue)   //-10

let str1= "Hello"
let str2= "Ujjwal"
let str3= str1 + " " + str2
console.log(str3)   //Hello Ujjwal

console.log("3" + 2)  //32  If either operand is a string, JavaScript converts the other operand to a string and joins them.
console.log(3 + "2")  //32  The same rule applies, even though the order is reversed.
console.log("3" - 2)  //1   Unlike +, the - operator is used for numeric subtraction, not string concatenation.
console.log(3 - "2")  //1  SAME 

console.log("3" + 2 +1)  //321  The + operator is evaluated from left to right, so the first operation is "3" + 2, which results in "32". Then, "32" + 1 results in "321".
console.log(3 + 2 + "1")  //51  The first operation is 3 + 2, which results in 5. Then, 5 + "1" results in "51".

console.log(+true)  //1  The unary + operator converts true to 1.
console.log(+"")  //0  The unary + operator converts an empty string to 0.