// variable assign
const userId= 23000
var userName= "Vinod"    
//not use var now a days due to issue of block scope and functional scope
let userPassword= "89001"
userSalary= 10000000      //never use this syntax in proffesional environment
let userOrder //it written as undefined

// userId= 24000
console.log(userId)  //not change const value  (TypeError)


// in table format
console.table([userId, userName, userPassword, userSalary, userOrder])
