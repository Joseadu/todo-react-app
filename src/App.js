// import './App.css';
import React from 'react';
import './app.css'

import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

// import { FaRegCheckCircle } from "react-icons/fa";

const todos = [
  {
    id: 1,
    text: 'Cortar cebolla',
    completed: false
  },
  {
    id: 2,
    text: 'Sacar a Mimi',
    completed: true
  },
  {
    id: 3,
    text: 'Darle medicinas a Tesla esta noche',
    completed: true
  }
]

let completedTodos = todos.filter(todo => [todo.completed]);
let totalTodos = todos.length;

console.log(completedTodos);
console.log(totalTodos);

function App() {
  return (
    <section id='section' className='row d-flex justify-content-center align-items-center p-3 bg-light'>
      <main className='container col-8 col-xl-4 bg-white p-4 border-0 rounded'>
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.id}
              text={todo.text}
              completed={todo.completed}
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </main>
    </section>
  );
}

export default App;
