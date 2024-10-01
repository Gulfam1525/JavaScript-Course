

// Stack Memory

let myBank = 'UBL';
let updateBank = myBank;
updateBank= "Metro";

console.log(myBank); 
console.log(updateBank); // Not Changed Value


// Heap Memory

let userOne = {
    name :'Awais',
    email : 'awais@gmail.com',
    age : 33,
}

console.log(userOne);

updateUserOne ={
    name :'Awais',
    email : 'awais@gmail.com',
    age : 35,
}

console.log(updateUserOne);


userOne.age = 40; // Changed Value
console.log(userOne);