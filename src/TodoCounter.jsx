import React from 'react'

export function TodoCounter(props) {
  return (
    <h2>Has completado {props.completedTodos} de {props.completedTodos} TODOs</h2>
  )
}