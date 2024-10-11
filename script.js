const users = [
    {
      name: "Олександр",
      eyeColor: "blue",
      gender: "male",
      isActive: true,
      email: "alex@example.com",
      age: 25
    },
    {
      name: "Марія",
      eyeColor: "green",
      gender: "female",
      isActive: false,
      email: "maria@example.com",
      age: 30
    },
    {
      name: "Іван",
      eyeColor: "brown",
      gender: "male",
      isActive: true,
      email: "ivan@example.com",
      age: 20
    },
    {
      name: "Анна",
      eyeColor: "blue",
      gender: "female",
      isActive: false,
      email: "anna@example.com",
      age: 28
    }
];

const userNames = users.map(user => user.name);
console.log(userNames);
const getUsersByGender = (gender) => users
    .filter(user => user.gender === gender)
    .map(user => user.name);

console.log(getUsersByGender("male")); 

const inactiveUsers = users.filter(user => !user.isActive);
console.log(inactiveUsers); 

const getUserByEmail = (email) => users.find(user => user.email === email);
console.log(getUserByEmail("ivalchuk4@gmail.com"));

const getUsersByAgeRange = (min, max) => users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersByAgeRange(20, 30)); 
