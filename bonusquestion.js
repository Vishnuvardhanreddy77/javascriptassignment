const transactions = [
  { id: 1, type: "Credit", amount: 500 },
  { id: 2, type: "Debit", amount: 100 },
  { id: 3, type: "Credit", amount: 250 },
  { id: 4, type: "Debit", amount: 50 }
];


const creditTransactions = transactions.filter(t => t.type === "Credit");
console.log(creditTransactions) 

const debitTransactions = transactions.filter(t => t.type === "Debit");
console.log(debitTransactions) 

let totalCredit = 0;

for (let transaction of transactions) {
  if (transaction.type === "Credit") {
    totalCredit += transaction.amount;
  }
}

console.log(totalCredit)

let totalDebit = 0;

for (let transaction of transactions) {
  if (transaction.type === "Debit") {
    totalDebit += transaction.amount;
  }
}

console.log(totalDebit); 

let transaction = transactions.find(t => t.id === 3);
console.log(transaction);
