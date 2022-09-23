// import './App.css';
import React from 'react';
import './app.css'

import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {TodoList} from './components/TodoList/TodoList';
import {TodoItem} from './components/TodoItem/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton/CreateTodoButton';
import {Modal} from './components/Modal/Modal';
import {TodoForm} from './components/TodoForm/TodoForm';

// import { FaRegCheckCircle } from "react-icons/fa";



// BASE DE DATOS HARD CODEADAS

// const defaultTodos = [
//   {
//     id: 1,
//     text: 'Cortar cebolla',
//     completed: false
//   },
//   {
//     id: 2,
//     text: 'Sacar a Mimi',
//     completed: false
//   },
//   {
//     id: 3,
//     text: 'Darle medicinas a Tesla esta noche',
//     completed: false
//   },
//   {
//     id: 4,
//     text: 'Estudiar React',
//     completed: true
//   },
//   {
//     id: 5,
//     text: 'Estudiar Angular',
//     completed: true
//   }
// ]


// CUSTOM HOOK

function useLocalStorage (itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        // LOCALSTORAGE

        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false)
      } catch (error) {
        setError(error)
      }

    }, 1000);
  });




  // ESTADO DE LOS TODOs

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(true)
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
};

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading, error
  } = useLocalStorage('TODOS_01', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);



  // VARIABLES PARA HACER RECUENTO DE TAREAS EN EL COMPONENTE TODOCOUNTER

  let completedTodos = todos.filter(todo => todo.completed).length;
  let totalTodos = todos.length;



  // FILTRAR LAS BÚSQUEDAS QUE CONINCIDAN CON LO QUE ESCRIBAMOS EN EL INPUT

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    });
  }



  // FUNCIÓN PARA MARCAR Y/O DESMARCAR TODOS

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      completed: false,
      text
    });

    saveTodos(newTodos);
  };
  
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    
    saveTodos(newTodos);
  };



  // FUNCIÓN PARA ELIMINAR TODOS

  const deleteTodos = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    // VALIDAR SI LA TAREA ESTÁ COMPLETADA PARA PODER ELIMINARLA
    if (newTodos[todoIndex].completed === true) {
      newTodos.splice(todoIndex, 1)

      // COMPROBAR LA LAONGITUD DEL TEXTO PARA CORTAR EL AVISO DE COMPLETADO
      // if(text.length > 20) {
      //   text = text.substring(0,20)
      //   alert(`Has eliminado la tarea: '${text}...'`);
      // } else {
      //   alert(`Has eliminado la tarea: '${text}'`);
      // };
    } else {
      alert('Debes completar la tarea para poder eliminarla')
    }
    
    saveTodos(newTodos);
  };



  // USO DE EFECTOS

  // console.log('Antes del use effect')
  
  // React.useEffect (() => {
  //   console.log('Use effect')
  // }, [])
  
  // console.log('Después del use effect')




  return (
    <section id='section' className='row d-flex justify-content-center align-items-center p-3 bg-light'>
      <main className='container col-8 col-xl-4 bg-white p-4 border-0 rounded'>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {loading && <p>Cargando...</p>}
          {error && <p>Hubo un error</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton
          setOpenModal={setOpenModal}
        >
        </CreateTodoButton>
        
        {!!openModal && (
        <Modal >
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          >

          </TodoForm>
        </Modal>
        )}
      </main>
    </section>
  );
};

export default App;
