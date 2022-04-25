import { FaTimes, FaCheck } from "react-icons/fa";

const Todo = ({ task, day, priority, done, id }) => {
  return (
    <>
      <tr className="table-row" key={id}>
        <td className="task">{task}</td>
        <td>{day}</td>
        <td>{priority}</td>
        <td>
          {" "}
          {done === "yes" ? (
            <FaCheck style={{ color: "green" }} />
          ) : (
            <FaTimes style={{ color: "red" }} />
          )}
        </td>
      </tr>
    </>
  );
};

export default Todo;
