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
    }

    const onCloseTodoForm = () => {
        // alert('Aquí se debería abrir el modal');
        props.setOpenModal(false);
    }

  return (
    <form onSubmit={onAddTodo} className='todo-form'>
        <div classNameName="form-group">
            <label for="exampleInputEmail1">Crear nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} type="text" className="form-control mt-2" id="exampleInputEmail1" placeholder="Hacer la compra..." />
        </div>

        <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            <button onClick={onCloseTodoForm} type="button" className="btn btn-outline-primary mt-3 mx-3">Cancel</button>
        </div>
    </form>
  )
}