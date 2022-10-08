import React from 'react';
import './TodoForm.css';

export function TodoForm(props) {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onAddTodo = (event) => {
        event.preventDefault();
        props.addTodo(newTodoValue);
        props.setOpenModal(false);
    }

    // const onCloseTodoForm = () => {
    //     // alert('Aquí se debería abrir el modal');
    //     props.setOpenModal(false);
    // }

  return (
    <form onSubmit={onAddTodo} className='todo-form'>
        <div classNameName="todo-form-group">
            <p>Task name</p>
            <input value={newTodoValue} onChange={onChange} type="text" className="todo-form-group-textarea" placeholder="Hacer la compra..." />
        </div>

        <div className="todo-form-button">
            <button type="submit" className="btn btn-primary">Create task</button>
            {/* <button onClick={onCloseTodoForm} type="button" className="btn btn-outline-primary mt-3 mx-3">Cancel</button> */}
        </div>
    </form>
  )
}