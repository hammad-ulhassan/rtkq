import ControlButtons from "../ControlButtons/ControlButtons";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

import { useGetTodosQuery } from "../../api/apiSlice";

function Todos(props) {
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <TodoForm />
      {/* <ControlButtons /> */}

      <h2 id="list-heading"> tasks remaining</h2>
      {(isError || !data) ? <h1>Error {JSON.stringify(data)}</h1> : <TodoList todos={data} />}
    </div>
  );
}

export default Todos;
