
/// ==================== Scope ==============================


function myOneFunction(){
    let userName = "gulfam"
    function twoFunction(){
        console.log("child Function")
        console.log(userName);
        
    }
   twoFunction();
}

myOneFunction();

let isLogged=false;

if(isLogged != true){
    console.log("Logged");
    let userId=210;
    if(true){
        console.log(userId);
        let userName ="ahmed"
    }
    // console.log(userName);
    
}else{
    console.log("next time");
    
}


// ++++++++++++++++++++ Declare Function ++++++++++++++


// 01) code execute

console.log(addNum(10,5));

function addNum(num1, num2){
    return num1+ num2
}


// 02) No code execute


console.log(secFunction(5,20));

let secFunction = function sumNum(value1,value2){
    return value1+value2
}
