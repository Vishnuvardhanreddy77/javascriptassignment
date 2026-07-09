const cards = [
  { cardNumber: "1111", status: "Active" },
  { cardNumber: "2222", status: "Blocked" },
  { cardNumber: "3333", status: "Active" }
];

let activeUsers = cards.filter(user => user.status =="Active");

console.log(activeUsers);
