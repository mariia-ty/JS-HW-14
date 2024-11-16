const users = [
  {
    name: "Stephanie Brown",
    eyeColour: "blue",
    gender: "Female",
    isActive: true,
    email: "steph@gmail.com",
    age: 25,
  },
  {
    name: "Brure Wayne",
    eyeColour: "blue",
    gender: "Male",
    isActive: true,
    email: "wayne.industries@gmail.com",
    age: 45,
  },
  {
    name: "Richard Grayson",
    eyeColour: "brown",
    gender: "Male",
    isActive: false,
    email: "richie@gmail.com",
    age: 30,
  },
  {
    name: "Jason Todd",
    eyeColour: "blue",
    gender: "Male",
    isActive: false,
    email: "jay@gmail.com",
    age: 28,
  },
  {
    name: "Selina Kyle",
    eyeColour: "green",
    gender: "Female",
    isActive: true,
    email: "kyleS@gmail.com",
    age: 39,
  },
];

//task 1 - list of names

const filteredNames = users.map((user) => user.name);
console.log(filteredNames);

//task 2 - objects of blue eyes people

const blueEyed = users.filter((user) => user.eyeColour === "blue");
console.log(blueEyed);

//task 3 - list of names of a gender

const female = users
    .filter((user) => user.gender === "Female")
    .map((user) => user.name);
console.log(female);

//task 4 - list of only the non-active members

const nonActive = users.filter((user) => user.isActive === false);
console.log(nonActive);

//task 5 - find one user by email

console.log(users.find((user) => user.email === "jay@gmail.com"));

//task 6 - list of users between an age range

const ageRangeNames = users
  .filter((user) => user.age > 19 && user.age < 32)
  .map((user) => user.name);

console.log(ageRangeNames);
