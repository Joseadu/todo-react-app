import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export function TodoItem(props) {
    const onCompleted = () => {
        let str = props.text;
        if(str.length > 20) {
            str = str.substring(0,20)
            alert(`Has completado la tarea: '${str}...'`);
        } else {
            alert(`Has completado la tarea: '${str}'`);
        };
    }

    const onDelte = () => {
        let str = props.text;
        if(str.length > 20) {
            str = str.substring(0,20)
            alert(`Has eliminado la tarea: '${str}...'`);
        } else {
            alert(`Has eliminado la tarea: '${str}'`);
        };
    }
    
  return (
    <div className='row'>
        <div className='d-flex align-items-center bg-light flex-row mt-3 p-3 w-100 position-relative'>
            <span><FaRegCheckCircle className='complete-todo' onClick={onCompleted} color={props.completed ? '#28A745' : 'lightgray'}/></span>
            <p className={`ms-2 p-completed ${!props.completed && 'p-uncompleted'}`}>{props.text}</p>

            
            <MdOutlineClose onClick={onDelte} className='delete-todo position-absolute end-0 me-3 pointer-event'/>
        </div>
    </div>
  )
}