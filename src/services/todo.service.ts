import axios from "axios";
import { TodoModel } from "../models/TodoModel";

//Set a valid token for app to run
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTFhZGIzOTNkYzBhNDg0NzEzZDcyOSIsImlhdCI6MTcxMzEyNTI2NywiZXhwIjoxNzE1NzE3MjY3fQ.bzA3T-aDB6DZIzki5QthO5gDj1r99C5odgvuDrazB6M'
const API_URL = "http://localhost:8000/api/todos/";

//Get todos
export const getTodos = async (filter: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + filter, config);
  return response.data;
};

//Add todo
export const addTodo = async (newTodo: TodoModel) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, newTodo, config);
  return response.data;
};

//Update todo
export const updateTodo = async (updatedTodo: TodoModel) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + updatedTodo.id, updatedTodo, config);
  return response.data;
};

//Delete todo
export const deleteTodo = async (todoId: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + todoId, config);
  return response.data;
};

