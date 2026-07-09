const users = [
  { id: 1, name: "Alex", authenticated: false },
  { id: 2, name: "Sam", authenticated: true },
  { id: 3, name: "David", authenticated: false }
];

let authenticatedvalue = users.filter(user => user.authenticated);
console.log(authenticatedvalue )