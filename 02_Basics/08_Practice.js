
/*  +++++++++++++++++++++++   Filter   ++++++++++++++++++++++++++++   */



const people = [
    { name: "Alice", age: 25, profession: "Engineer", location: "New York", hobbies: ["Reading", "Hiking"], isEmployed: true },
    { name: "Bob", age: 30, profession: "Doctor", location: "San Francisco", hobbies: ["Cycling", "Photography"], isEmployed: true },
    { name: "Charlie", age: 28, profession: "Teacher", location: "Chicago", hobbies: ["Traveling", "Music"], isEmployed: true },
    { name: "Diana", age: 24, profession: "Artist", location: "Los Angeles", hobbies: ["Painting", "Yoga"], isEmployed: false },
    { name: "Eve", age: 27, profession: "Writer", location: "Boston", hobbies: ["Writing", "Cooking"], isEmployed: true },
    { name: "Frank", age: 32, profession: "Lawyer", location: "Seattle", hobbies: ["Running", "Reading"], isEmployed: true },
    { name: "Grace", age: 29, profession: "Chef", location: "Houston", hobbies: ["Cooking", "Traveling"], isEmployed: true },
    { name: "Hank", age: 33, profession: "Architect", location: "Austin", hobbies: ["Sketching", "Photography"], isEmployed: true },
    { name: "Ivy", age: 26, profession: "Pharmacist", location: "Philadelphia", hobbies: ["Gardening", "Baking"], isEmployed: false },
    { name: "Jack", age: 31, profession: "Photographer", location: "Denver", hobbies: ["Photography", "Cycling"], isEmployed: true },
    { name: "Karen", age: 28, profession: "Software Developer", location: "San Diego", hobbies: ["Coding", "Gaming"], isEmployed: true },
    { name: "Leo", age: 24, profession: "Accountant", location: "Miami", hobbies: ["Swimming", "Investing"], isEmployed: true },
    { name: "Mona", age: 22, profession: "Nurse", location: "Portland", hobbies: ["Reading", "Hiking"], isEmployed: false },
    { name: "Nina", age: 26, profession: "Data Scientist", location: "Atlanta", hobbies: ["Data Analysis", "Gaming"], isEmployed: true },
    { name: "Oscar", age: 34, profession: "Engineer", location: "Dallas", hobbies: ["Gaming", "Traveling"], isEmployed: true },
    { name: "Paul", age: 29, profession: "Pilot", location: "Las Vegas", hobbies: ["Flying", "Running"], isEmployed: true },
    { name: "Quincy", age: 27, profession: "Musician", location: "Nashville", hobbies: ["Playing Guitar", "Composing"], isEmployed: false },
    { name: "Rachel", age: 32, profession: "Therapist", location: "Phoenix", hobbies: ["Meditation", "Yoga"], isEmployed: true },
    { name: "Steve", age: 30, profession: "Salesperson", location: "Orlando", hobbies: ["Golf", "Socializing"], isEmployed: true },
    { name: "Tina", age: 23, profession: "Journalist", location: "San Antonio", hobbies: ["Writing", "Photography"], isEmployed: false }
  ];


  let userAcc = people.filter ((value)=>{
    return value.age >= 10 && value.isEmployed != true;

  })

//   console.log(userAcc);


/* +++++++++++++++++++++++   Map +++++++++++++++++++++++++++++++++  */

  let score = [2,4,5,5,7,3,8,3,9]

  let newScore = score.map( (num)=>{
    return num+2*5;
  }
  )
//   console.log(newScore);




  /* +++++++++++++++++++ Chaning ++++++++++++++++++ */


  let game = [20,10,30,15,5.19,23,34,10]

  let newGame = game
                    .map((value)=>{return value+5})
                    .filter((value)=> value >=25)
  // console.log(newGame);
  



  /* +++++++++++++++++++  Reduce ++++++++++++++++++ */


  let value = [10,21,9,17]

  const newValue = value.reduce((accu, currentValue)=>{
    return accu+currentValue;
  },0)

  // console.log(newValue);



  let shoppingCart= [
    {
      item: "Mobile",
      price: 12000,
    },
    {
      item: "Laptop",
      price: 38000,
    },
    {
      item: "Watch",
      price: 4000,
    }
  ]

  let itemPrice= shoppingCart.reduce((accu, currentValue)=>{
    // console.log(shoppingCart);
    
    return accu+currentValue.price;
  },0)

  console.log(itemPrice);
  
  
  