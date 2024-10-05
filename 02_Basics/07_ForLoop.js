


/* +++++++++++++++ For Loop ++++++++++++++++++++++ */






/* 01. Print Numbers from 1 to 10: Write a for loop that prints numbers from 1 to 10. */

for (let i = 0; i <= 10; i++) {
    // console.log(i);

}

/* 02. Sum of First 10 Natural Numbers: Write a for loop to calculate the sum of the first 10 natural numbers. */


let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i; /*0,1,3 */

    //    console.log(i);

    // console.log(sum);

}



/* 03. Print Even Numbers from 1 to 20: Write a for loop that prints all the even numbers between 1 and 20. */

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        // console.log(i);

    }
}


/* 4. Print a Table of Any Number: Write a for loop that prints the multiplication table for any given */


for (let i = 1; i <= 10; i++) {
    // console.log("Table");

    // console.log(`${4} * ${i} = ${4*i}`);
    // console.log(`${6} * ${i} = ${6*i}`);
}


/* 05. Print an Array of Numbers: Write a for loop that prints each element of an array.
    let arr = [10, 20, 30, 40, 50]; */

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

}



/* 06. Factorial of a Number: Write a for loop to calculate the factorial of a given number. */


let n = 5;
let f = 1;
for (let i = 1; i <= n; i++) {
    f *= i
    // console.log(f);

}
// console.log(f);




/* 07. Sum of Elements in an Array: Write a for loop to find the sum of all elements in an array. */


let arr2 = [1, 2, 3, 4, 5];
let sumarr = 0;
for (let i = 0; i < arr2.length; i++) {
    sumarr += arr2[2];

}
// console.log(sumarr);



/* 08. Squares of Numbers from 1 to 10: Write a for loop that prints the square of each number from 1 to 10. */


for(let i=1; i<=10; i++){
    // console.log(i*i);
    
}

/* 09. Count Down from 20 to 1: Write a for loop that counts down from 20 to 1 and prints each number. */


for(let i=20; i>=1; i--){
    // console.log(i);
}


/* 10. Print the Multiplication Table of 3: Write a for loop to print the multiplication table of 3 (up to 10). */

for(let i=1; i<=10; i++){
    console.log(3*i);
    
}




