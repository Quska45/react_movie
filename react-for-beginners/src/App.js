import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("i run all the time");

  // 최초에 한번만 실행되도록 사용함
  useEffect(() => console.log("i run only once"), []);
  // keyword의 상태가 변할 때마다 실행되도록 사용함. 간단한 로직도 넣어 봤음.
  useEffect(() => {
    console.log("i run when keyword changes");
    return () => console.log("keyword effect destroy");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="'Search here"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
