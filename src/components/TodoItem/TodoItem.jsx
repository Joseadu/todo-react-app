import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

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
    <div className='row'>
        <div className='d-flex align-items-center bg-light flex-row mt-3 p-3 w-100 position-relative'>
            <span><FaRegCheckCircle className='complete-todo' onClick={props.onComplete} color={props.completed ? '#28A745' : 'lightgray'}/></span>
            <p className={`ms-2 p-completed ${!props.completed && 'p-uncompleted'}`}>{props.text}</p>

            
            <MdOutlineClose onClick={props.onDelete} className='delete-todo position-absolute end-0 me-3 pointer-event'/>
        </div>
    </div>
  )
}