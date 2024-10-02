
// ========================= Function ===============================

let num1=10;
let num2=20;

function addNum(){
    
     console.log( num1+num2);
}

// console.log(addNum());
addNum(); 


function userAccount(userName) {
     return `my name ${userName}`
    
}

// userAccount('Gulfam');

console.log(userAccount('gulfam'));



// function userDetails(userId){
//     if(userId===Number){
//         return userId;
//     }
    
// }

// console.log(userId(1011));



// ============== Object function =====================

const myAccount = {
    userName: 'ali',
    userId: 13369,
    userEmail: 'ali@google.com'
}

function myObject(anyobject){
    return `${anyobject.userName} and ${anyobject.userId} and ${anyobject.userEmail}`
}

console.log(myObject(myAccount));




// =================== Array Function ==========================

const myArray=['ahmed' , 'awais' , 'javed']

function myArr(anyArray){
    return anyArray;
}

console.log(myArr(myArray));
