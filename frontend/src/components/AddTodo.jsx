import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = ({ setTodos, todos }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [priority, setPriority] = useState("");

  let navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newTodo = await axios.post("http://localhost:5000/todos", {
      task,
      day,
      priority,
    });
    console.log(newTodo);
    setTodos([...todos, newTodo.data]);
  };

  return (
    <div className="add-todo-form-container">
      <button className="go-back" onClick={redirect}>
        BACK
      </button>
      <h1>Add Todo</h1>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <label>Task </label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Day </label>
          <input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Priority </label>
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <div className="submit-btn">
          <input type="submit" value="Add Todo" />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
