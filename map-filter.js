const numbers = [3, 6, 9, 12, 11, 14];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
//using map 
//map use korle kono arry te loop through kore elements niye kisu ekta kora 
// const result = numbers.map((x) => {
//     return x * x;
// })

//filter use 

// const isBigger = numbers.filter((s) => {
//     return s > 5;
// })
// console.log(isBigger);

//Find use 

const find = numbers.find(x => x < 13);
console.log(find);