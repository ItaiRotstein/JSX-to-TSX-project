import { useState } from "react";

import { TodoModel } from "../models/TodoModel";
import EditTodo from "./EditTodo";

import { TiDeleteOutline } from "react-icons/ti";


interface Props {
  todo: TodoModel;
  updateTodo: (updatedTodo: TodoModel) => void;
  deleteTodo: (id: string) => void;
}
const Todo = ({ todo, updateTodo, deleteTodo }: Props) => {

  const todoDate = new Date(todo.createdAt).toLocaleDateString('en-GB')

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClick = (e: React.FormEvent) => {
    e.stopPropagation()
    deleteTodo(todo.id)
  }


  return (
    <>
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