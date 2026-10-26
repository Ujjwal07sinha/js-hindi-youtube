console.log(3>2)
console.log(3<2)
console.log(3>=2)
console.log(3<=2)
console.log(3==2)
console.log(3!=2)
console.log(3===2)
console.log(3!==2) //true  The !== operator checks for both value and type inequality, so 3 is not equal to 2 in both value and type.

console.log("3">2)  //true  The > operator compares the numeric values of the operands, so "3" is converted to 3 and compared to 2.
console.log(null>0)  //false  The > operator compares the numeric values of the operands, so null is converted to 0 and compared to 0.
console.log(null>=0)  //true  The >= operator compares the numeric values of the operands, so null is converted to 0 and compared to 0.
console.log(null==0)  //false  The == operator checks for value equality, but null is not equal to 0 in value.
console.log(null===0)  //false  The === operator checks for both value and type equality, so null is not equal to 0 in both value and type.

console.log(undefined>0)  //false  The > operator compares the numeric values of the operands, but undefined is not a number, so the comparison returns false.
console.log(undefined<0)  //false  The < operator compares the numeric values of the operands, but undefined is not a number, so the comparison returns false.
console.log(undefined==0)  //false  The == operator checks for value equality, but undefined is not equal to 0 in value.
console.log(undefined===0)  //false  The === operator checks for both value and type equality, so undefined is not equal to 0 in both value and type.

