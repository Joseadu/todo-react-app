import React from 'react'

export function TodoCounter(props) {
  return (
    <h2>Has completado {props.completedTodos} de {props.totalTodos} TODOs</h2>
  )
}