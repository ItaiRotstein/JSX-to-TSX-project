import { useState, useEffect } from "react"
import { useDebouncedCallback } from 'use-debounce';

import { TodoModel } from "../models/TodoModel";

import { getTodos, addTodo, updateTodo, deleteTodo } from "../services/todo.service";
import { utilService } from "../services/util.service";
import Sidenav from "./Sidenav"
import Todo from "./Todo"

const Todos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    const data = getTodos('')
    data.then((res) => setTodos(res))
  }, []);

  const onAddTodo = (title: string) => {
    const newTodo = {
      title,
      completed: false,
      createdAt: Date.now(),
      id: utilService.makeId()
    }
    setTodos([newTodo, ...todos])
    addTodo(newTodo)
  };

  const onUpdateTodo = (updatedTodo: TodoModel) => {
    const updatedTodos = todos.map(
      (todo) => todo.id === updatedTodo.id ? updatedTodo : todo
    )
    setTodos(updatedTodos)
    updateTodo(updatedTodo)
  };

  const onDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
    deleteTodo(id)
  };

  const onHandleFilter = useDebouncedCallback((filter) => {
    const filterBy = `?title=${filter}`
    const data = getTodos(filterBy)
    data.then((res) => setTodos(res))
  }, 300);

  if (!todos) return <h1>Loading...</h1>

  return (
    <main className="main-layout">
      <Sidenav onHandleFilter={onHandleFilter} addTodo={onAddTodo} />
      <section className="todos">
        {todos.length <= 0
          ? (<h1>No todos here yet...</h1>)
          : todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.createdAt}
              updateTodo={onUpdateTodo}
              deleteTodo={onDeleteTodo}
            />
          ))}
      </section>
    </main>
  )
}
export default Todos