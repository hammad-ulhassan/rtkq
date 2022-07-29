import { useAddTodoMutation } from "../../api/apiSlice";
import { Formik, Field, Form } from "formik";

function TodoForm() {
  const [addTodo] = useAddTodoMutation();

  const addNewTodo = (values) => {
    addTodo({
      userId: 1,
      title: values.title,
      completed: false
    })
  };

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      onSubmit={(values) => {
        addNewTodo(values);
      }}
    >
      <Form>
        <h2 className="label-wrapper">
          <label htmlFor="title" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <Field
          id="title"
          name="title"
          type="text"
          className="input input__lg"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
