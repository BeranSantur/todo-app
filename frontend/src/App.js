import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await axios("http://localhost:5000/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {" "}
      <h1 className="header">Todos</h1>
      <div className="app">
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
