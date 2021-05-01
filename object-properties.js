const student = [
    { id: 12, name: "romesh" },
    { id: 13, name: "kalu" },
    { id: 14, name: "bulu" },
    { id: 15, name: "culbul" },
    { id: 15, name: "bulbul" },

]

// const ids = [];
// const names = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const id = element.id;
//     ids.push(id);
//     const name = element.name;
//     names.push(name);
// }

// console.log(ids);
// console.log(names);

const names = student.map(s => s.name);
const ids = student.map(s => s.id);

const bigger = student.filter(s => s.id > 12);
const biggerOne = student.find(s => s.id > 12);
console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);