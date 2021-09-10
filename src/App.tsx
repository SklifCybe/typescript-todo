import React from 'react';
import {Route} from "react-router-dom";

import {NavBar} from "./Components/NavBar";
import {ToDoPage} from "./pages/ToDo-page";
import {ITodo} from "./interfaces";
import {ToDoList} from "./Components/ToDoList";
import {AboutPage} from "./pages/About-page";

const App: React.FC = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')!);
  const [todos, setTodos] = React.useState<ITodo[]>(initialState);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((i: ITodo) => i.id !== id));
  };

  const completedTodo = (id: number) => {
    setTodos(prev =>
      prev.map(i => {
        if (i.id === id) {
          const newTask: ITodo = {
            ...i,
            completed: !i.completed
          };
          return newTask;
        }
        return i;
      }));
  };

  return (
    <>
      <NavBar/>
      <div className="container mr-t">
        <Route
          path="/"
          exact
          render={() =>
            <ToDoPage
              addTodo={addTodo}
              todos={todos}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
            />
          }
        />
        <Route path="/about" component={AboutPage}/>
        <Route
          path="/list"
          render={() =>
            <ToDoList
              todos={todos}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
            />
          }
        />
      </div>
    </>
  )
};
export default App;