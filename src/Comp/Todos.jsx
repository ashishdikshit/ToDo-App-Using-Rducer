import React, { useContext } from "react";
import { BiCheck, BiEdit, BiTrash } from "react-icons/bi";
import { TodoContext } from "../Context/TodoProvider";
import TodoList from "./TodoList";
import AlertMsg from "./AlertMsg";
import { MemoContext } from "../Context/MemoProvider";

const Todos = () => {
  // const { todos } = useContext(TodoContext);

  const { filteredTodos } = useContext(MemoContext);
  return (
    // <ul className="todos">
    //   {/* <li>
    //     <button className="checkBtn btn btn-circle">
    //       <BiCheck />
    //     </button>
    //     <p className="text"> Create bike shop simple website</p>
    //     <button className="editBtn btn btn-circle">
    //       <BiEdit />
    //     </button>
    //     <button className="trashBtn btn btn-circle">
    //       <BiTrash />
    //     </button>
    //   </li> */}
    //   {todos.length > 0 ? (
    //     todos.map(todo => (<TodoList key={todo.id} {...todo}></TodoList>))
    //   ) : (
    //     <AlertMsg></AlertMsg>
    //   )}
    // </ul>

    <ul className="todos">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoList key={todo.id} {...todo} />)
      ) : (
        <AlertMsg />
      )}
    </ul>
  );
};

export default Todos;
