import React from 'react';
import './TodoCounter.css'

export function TodoCounter(props) {
  return (
    <>
      <h2>Your tasks</h2>

      <h3>Completed {props.completedTodos} of {props.totalTodos}</h3>
    </>
  )
}