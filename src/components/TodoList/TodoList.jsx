import React from 'react'

export function TodoList(props) {
  return (
    <section className='todo-list'>
        <div className='list-group'>
            {props.children}
        </div>
    </section>
  )
}