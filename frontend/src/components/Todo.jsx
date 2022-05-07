import axios from "axios";
import { Link } from "react-router-dom";

const Todo = ({ task, day, priority, done, _id, deleteTodo }) => {
  return (
    <>
      <tr>
        <td>{task}</td>
        <td>{day}</td>
        <td>{priority}</td>
        <td>
          <input
            type="checkbox"
            checked={done === "yes" ? true : false}
            readOnly={true}
          />
        </td>
        <td>
          <button
            className="delete-todo"
            onClick={() => {
              deleteTodo(_id);
            }}
          >
            DELETE{" "}
          </button>
        </td>
        <td>
          <Link to={`/editTodo/${_id}`}>
            <button className="edit-todo">EDIT</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Todo;
