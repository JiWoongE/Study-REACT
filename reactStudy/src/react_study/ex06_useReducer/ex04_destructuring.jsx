// function Info({ name, age }) {
//   // const {name, age} = props
//   return (
//     <>
//       <h1>
//         {name}은 {age}살 이다.
//       </h1>
//     </>
//   );
// }

// export default function InfoList() {
//   return (
//     <>
//       <Info name="Alice" age={25} />
//       <Info name="Bob" age={40} />
//     </>
//   );
// }

function Book({ title, author, year }) {
  return (
    <>
      <h1>
        제목:{title}, 저자:{author}, 출판연도:{year}
      </h1>
    </>
  );
}

const books = [
  { title: "해리포터", author: "J.K.롤링", year: 1997 },
  { title: "어린왕자", author: "생텍쥐페리", year: 1943 },
];

export default function BookList() {
  return (
    <>
      {books.map(({ title, author, year }, idx) => {
        return <Book key={idx} title={title} author={author} year={year} />;
      })}
    </>
  );
}
