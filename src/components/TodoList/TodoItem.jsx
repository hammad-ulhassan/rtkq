import { useDeleteTodoMutation, useUpdateTodoMutation } from "../../api/apiSlice";

export default function TodoItem({todo}) {
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={todo.id} type="checkbox" checked={todo.completed} onChange={()=>updateTodo({...todo, completed: !todo.completed})}/>
        <label className="todo-label" htmlFor="todo-0">
          {todo.title}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn__danger" onClick={()=>deleteTodo({id: todo.id})}>
          Delete <span className="visually-hidden">{todo.title}</span>
        </button>
      </div>
    </li>
  );
}
