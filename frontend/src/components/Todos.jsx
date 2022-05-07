import Todo from "./Todo";
import { Link } from "react-router-dom";

const Todos = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className="table-container">
      <h1 className="todo-header">Todo App</h1>
      <Link to="/addTodo">
        <button className="add-todo-btn">Add Todo</button>
      </Link>
      {todos.length !== 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Day</th>
              <th>Done</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              console.log(todo._id);
              return (
                <Todo
                  {...todo}
                  key={todo._id}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Nothing to show</div>
      )}
    </div>
  );
};

export default Todos;
