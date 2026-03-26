// console.log("1.시작");

// setTimeout(() => {
//   console.log("2. 1초 후 실행");
// }, 1000);

// console.log("3 끝");

function sayHello(name, callback) {
  console.log("안녕 ", name);
  callback();
}

sayHello("청수", () => {
  console.log("잘지내자");
});

setTimeout(() => {
  //가독성 떨어짐 콜백지옥 => Promise 사용
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("4");
      }, 500);
    }, 500);
  }, 500);
}, 500);
