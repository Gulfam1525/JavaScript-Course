// ================== Object ======================


const Car = {
    name: "Mehran",
    engineSize : 200,
    color : "White",
    model : [2003, 2005, 2006],
    features : {
        Ac : false,
        Transission : "Manual"
    }
}

// console.log(Car.model);
// console.log(typeof Car.model);
// console.log(typeof Car.features);
// console.log(typeof Car.engineSize);

// console.table(Car);
// console.log(Car);
// Car.price=20000;
// Car.color="black";
// delete Car.color;

// console.log(Car);



// console.log(Car.features.Ac);
// console.log(typeof Car.features.Ac);

// console.log(Object.values(Car));


// Object.freeze(Car); 


// ====================  Object.assign() ========================


const obj1={
    a:12,
    b:13,
    c:11,
}
const obj2={
    a: 20,
    y:50,
    z:23,
}

// const obj3=Object.assign(obj1,obj2 );

const obj3={...obj1,...obj2}
console.log(obj3);



// ===== Object.hasOwn()


let student={
    name:'gulfam',
    email :'gulfam@google.com'
}

console.log(Object.hasOwn(student, 'name'));
console.log(Object.hasOwn(student, 'age'));

