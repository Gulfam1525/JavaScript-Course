// ================= This Keywords =====================

let myobj= {
    username:"gulfam",
    id: 1337687,
    email: "gulfam@google.com",
    loggedWelcomeMessage : function (){
      console.log(`Welcome Our Website ${this.username}`);
    }
}

myobj.loggedWelcomeMessage();
myobj.username="ahmed"
myobj.loggedWelcomeMessage();




// ================ Arrow Function ===============================


// 01)

let arrfunction = (a,b) => {
    console.log(a+b);
}
arrfunction(20,12);



// 02) One Line Function

let arr2 = (a,b) => console.log(a+b);

arr2(10,15)



// When One Parameter

let username;
const arr3 = (username) => `${username} developer`;

console.log(arr3("gulfam"));

