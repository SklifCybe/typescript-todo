import React from 'react';

import {ToDoForm} from "../Components/ToDoForm";
import {ToDoList} from "../Components/ToDoList";
import {ITodo} from "../interfaces";

interface PropsTodoPage {
  addTodo: (text: string) => void
  todos: ITodo[]
  deleteTodo: (id: number) => void
  completedTodo: (id: number) => void
}

export const ToDoPage: React.FC<PropsTodoPage> = ({addTodo, todos, deleteTodo, completedTodo}) => {
  return (
    <>
      <ToDoForm addTodo={addTodo}/>
      {todos.length === 0 ?
        <div className="center cyan-text text-lighten-1">Список задач пуст</div> :
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
        />
      }
    </>
  );
};