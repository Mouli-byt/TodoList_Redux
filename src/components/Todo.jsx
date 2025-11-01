import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";


export default function Todo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch= useDispatch();

    const delTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    const mark = (id) => {
        console.log(id);
         dispatch(markAsDone(id));
    }

    return(
        <>
          <AddForm />
          <h2>Todo List</h2>
          <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ textDecorationLine : todo.isDone==true ?"line-through":"" }} >{todo.task}
                &nbsp;
                <button onClick={() => {delTodo(todo.id)}} >Delete</button>
                <button onClick={() => {mark(todo.id)}} >Mark as Read</button>
                </li>
                ))}
          </ul>
        </>
    )
}