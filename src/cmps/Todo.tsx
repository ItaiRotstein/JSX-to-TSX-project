import { useState } from "react";

import { TiDeleteOutline } from "react-icons/ti";

import EditTodo from "./EditTodo";
import { TodoModel } from "../models/TodoModel";

interface Props {
  todo: TodoModel;
  updateTodo: (updatedTodo: TodoModel) => void;
  deleteTodo: (id: string) => void;
}
const Todo = ({ todo, updateTodo, deleteTodo }: Props) => {

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClick = (e: React.FormEvent) => {
    e.stopPropagation()
    deleteTodo(todo.id)
  }

  const todoDate = new Date(todo.createdAt).toLocaleDateString('en-GB')

  return (<>
    {show && <EditTodo
      show={show}
      handleClose={handleClose}
      todo={todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />}
    <div className={"todo-container"} onClick={handleShow}>
      <div className="todo">
        <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </div>
        <div className="todo-buttons">
          <div className="time-and-date">
            <div>
              {todoDate}
            </div>
          </div>
          <TiDeleteOutline className='todo-delete-button' onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  </>
  )
};

export default Todo;