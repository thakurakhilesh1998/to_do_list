import React from 'react';
import './ToDoList.css'

const ToDoListItem=(props)=>
{
    return (
    <>
        <div className="todoStyle">
        <i className="fas fa fa-close" onClick={()=>{
            props.onDelete(props.id);
        }}></i>
            <li>{props.text}</li>
        </div>
    </>
    );
}

export {ToDoListItem};