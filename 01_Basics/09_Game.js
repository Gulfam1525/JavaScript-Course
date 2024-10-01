let userValue = prompt("Enter a value between 10 To 30")
console.log(userValue);

let min = 10;
let max= 30;
let myNum =Math.random();
// console.log(myNum);
let myNum1 = (Math.floor(Math.random()*(max - min + 1))+ min)

if (userValue == myNum1){
    console.log("You win");
    
} else{
    console.log("Again try");
    console.log(myNum1);
}