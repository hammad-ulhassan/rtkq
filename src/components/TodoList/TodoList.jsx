import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {todos.map((todoItem) => (
        <TodoItem todo={todoItem} key={todoItem.id} />
      ))}
    </ul>
  );
}

export default TodoList;
