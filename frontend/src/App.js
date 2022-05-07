import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Todos from "./components/Todos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const todos = await axios.get("http://localhost:5000/todos");
    setTodos(todos.data);
  };

  const editTodo = async (_id, editedTodo) => {
    const res = await axios.put(
      `http://localhost:5000/todos/${_id}`,
      editedTodo
    );

    console.log(res);

    setTodos(
      todos.map((todo) => {
        if (todo._id === _id) {
          todo = editedTodo;
        }
        return todo;
      })
    );
  };

  const deleteTodo = async (_id) => {
    const res = await axios.delete(`http://localhost:5000/todos/${_id}`);
    const newArray = todos.filter((todo) => _id !== todo._id);
    console.log(newArray);
    setTodos(newArray);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Todos todos={todos} deleteTodo={deleteTodo} />}
          ></Route>
          <Route
            path="/addTodo"
            element={<AddTodo setTodos={setTodos} todos={todos} />}
          ></Route>
          <Route
            path="/editTodo/:_id"
            element={<EditTodo editTodo={editTodo} todos={todos} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
