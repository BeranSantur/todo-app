import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <>
      <table>
        <thead className="table-headers">
          <tr>
            <th>Task</th>
            <th>Day</th>
            <th>Priority</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo {...todo} key={todo._id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
