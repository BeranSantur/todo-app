import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditTodo = ({ editTodo, todos }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [priority, setPriority] = useState("");
  const [isDone, setIsDone] = useState(false);
  // const [newTodo, setNewTodo] = useState({});

  const { _id } = useParams();
  let navigate = useNavigate();

  //passing _id as a state using Link
  //  const location = useLocation();
  //   const { _id } = location.state;

  // useEffect(() => {
  //   let todo = { task: "", day: "", priority: "" };
  //   todos.find((f) => {
  //     if (f._id === _id) {
  //       todo = f;
  //       return true;
  //     }
  //   });

  //   console.log(todo);

  //   setTask(todo.task);
  //   setDay(todo.day);
  //   setPriority(todo.priority);
  // }, []);

  const redirect = () => {
    navigate("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let newTodo = {};

    let done = "";
    if (isDone) {
      done = "yes";
    } else {
      done = "no";
    }
    todos.find((f) => {
      if (f._id === _id) {
        newTodo = f;
        return true;
      }
    });
    newTodo = { _id, task, day, priority, done };

    editTodo(_id, newTodo);

    console.log(newTodo);
  };
  return (
    <div className="add-todo-form-container">
      <button className="go-back" onClick={redirect}>
        BACK
      </button>
      <h1 className="edit-task-header">Edit Todo</h1>
      <form className="edit-todo-form" onSubmit={onSubmit}>
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
        <div className="form-row">
          <label>Done </label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={(e) => setIsDone(e.currentTarget.checked)}
          />
        </div>
        <div className="submit-btn">
          <input type="submit" value="Edit Todo" />
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
