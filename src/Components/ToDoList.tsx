import React from 'react';

import {ITodo} from "../interfaces";

interface PropsToDoList {
  todos: ITodo[]
  deleteTodo: (id: number) => void
  completedTodo: (id: number) => void
}

export const ToDoList: React.FC<PropsToDoList> = ({todos, deleteTodo, completedTodo}) => {
  const deleteHandle = (id: number) => {
    if (window.confirm('Вы уверены что хотите удолить задачу?')) {
      deleteTodo(id);
    }
  };

  const completedHandler = (id: number) => {
    completedTodo(id);
  };


  return (
    <ul>
      {todos.map((todo: ITodo) => (
        <li key={todo.id} style={{marginBottom: "1rem"}}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={() => completedHandler(todo.id)}/>
            {
              todo.completed ?
                <span className="completed">{todo.text}</span> :
                <span className="black-text">{todo.text}</span>
            }
            <i className="material-icons right trash-danger" onClick={() => deleteHandle(todo.id)}>delete</i>
          </label>
        </li>
      ))}
    </ul>
  );
};