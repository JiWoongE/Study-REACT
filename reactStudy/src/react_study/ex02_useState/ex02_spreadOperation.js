const arr1 = [1, 4, 5];
const arr2 = [4, 5, ...arr1, 6];
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);
const obj3 = { ...obj2, b: 20 };
console.log(obj3);

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "grape"];
const fruits3 = [...fruits1, ...fruits2];
console.log(fruits3);

const user = { name: "Tom", age: 20 };
const job = { title: "Developer", company: "Google" };
const person = { ...user, ...job };
console.log(person);
