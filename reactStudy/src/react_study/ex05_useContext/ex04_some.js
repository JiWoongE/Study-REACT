// const nums = [1, 3, 5, 7];

// console.log(nums.some((n) => n % 2 === 0));
// console.log(nums.some((n) => n > 4));

// const user = [
//   { id: "id1", pw: "1234" },
//   { id: "id2", pw: "5678" },
// ];

// const inputId = "id1";
// const inputPw = "1234";

// const isValid = user.some(({ id, pw }) => {
//   return id === inputId && pw === inputPw;
// });

// console.log(isValid);

const num = [2, 4, 6, 8];

console.log(num.some((n) => n % 2 === 1));

const members = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

console.log(members.some(({ age }) => age >= 25));
