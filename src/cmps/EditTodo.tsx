import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { TodoModel } from '../models/TodoModel';

interface Props {
  todo: TodoModel;
  show: boolean;
  handleClose: () => void;
  updateTodo: (updatedTodo: TodoModel) => void;
  deleteTodo: (id: string) => void;
}

const EditTodo = ({ show, handleClose, todo, updateTodo, deleteTodo }: Props): JSX.Element => {
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const [isChecked, setIsChecked] = useState<boolean>(todo.completed);

  const handleSubmit = () => {
    handleClose()
    if (!todoTitle) return
    onUpdateTodo()
  }

  const handleDelete = () => {
    handleClose()
    deleteTodo(todo.id)
  }

  const onUpdateTodo = () => {
    const updatedTodo = { ...todo, title: todoTitle, completed: isChecked }
    updateTodo(updatedTodo)
  }

  if (!todo) return <></>;

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              value={todoTitle}
              autoFocus
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <input
              className="form-check-input me-2"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <Form.Label>Completed</Form.Label>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} type='button'>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleDelete} type='button'>
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditTodo;