const apiResponse = '{"name":"John","age":26}';

const user = JSON.parse(apiResponse);
console.log(user.name);
console.log(user.age);