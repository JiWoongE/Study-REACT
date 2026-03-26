import { useState, useCallback } from "react";
import debounce from "lodash.debounce";

export default function SearchBox() {
  const [text, setText] = useState("");

  const debouncedSearch = useCallback(
    debounce((value) => {
      console.log("API 요청:", value);
    }, 500), // 0.5초 동안 대기 후 추가 입력이 없을 때 실행
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    debouncedSearch(value);
  };

  return <input value={text} onChange={handleChange} />;
}
