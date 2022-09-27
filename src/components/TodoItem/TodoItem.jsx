import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import './TodoItem.css';

export function TodoItem(props) {
    // const onComplete = () => {
    //     let str = props.text;
    //     if(str.length > 20) {
    //         str = str.substring(0,20)
    //         alert(`Has completado la tarea: '${str}...'`);
    //     } else {
    //         alert(`Has completado la tarea: '${str}'`);
    //     };
    // }

    // const onDelete = () => {
    //     let str = props.text;
    //     if(str.length > 20) {
    //         str = str.substring(0,20)
    //         alert(`Has eliminado la tarea: '${str}...'`);
    //     } else {
    //         alert(`Has eliminado la tarea: '${str}'`);
    //     };
    // }
    
  return (
    <div className='todo-item'>
      <span><FaRegCheckCircle className='todo-item-complete' onClick={props.onComplete} color={props.completed ? '#28A745' : 'lightgray'}/></span>
      <p className={`todo-item-text p-completed ${!props.completed && 'p-uncompleted'}`}>{props.text}</p>

            
      <MdOutlineClose onClick={props.onDelete} className='todo-item-delete position-absolute end-0 me-3 pointer-event'/>
    </div>
  )
}