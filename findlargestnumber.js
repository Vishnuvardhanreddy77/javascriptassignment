const numbers = [12,45,6,89,33];

let largestnumber = [0];

for (let num of numbers) {
   if (num > largestnumber)
   {
     largestnumber = num;
   }
}
console.log(largestnumber);