import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((currentArray) => {
      return [toDo, ...currentArray];
    });
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type={"text"}
          placeholder="Write some"
        ></input>
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
