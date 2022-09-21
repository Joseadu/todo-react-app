import React from 'react'

export function TodoList(props) {
  return (
    <section>
        <div className='list-group'>
            {props.children}
        </div>
    </section>
  )
}