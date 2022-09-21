import React from 'react'

export function CreateTodoButton() {
    const onClickButton = () => {
        alert('Aquí se debería abrir el modal');
    }

  return (
    <button
        className='btn rounded-circle btn-primary mt-3'
        onClick={onClickButton}
        >
            +
    </button>
  )
}