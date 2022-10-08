import React from 'react'

import './CreateTodoButton.css'

export function CreateTodoButton(props) {
    const onClickButton = () => {
      // alert('Aquí se debería abrir el modal');
      props.setOpenModal(true);
    }

  return (
    <button
        className='btn rounded-circle btn-primary mt-3 mi-boton'
        onClick={onClickButton}
        >
          Add task
    </button>
  )
}