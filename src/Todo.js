import React from "react";
import './Todo.css';


const Todo = ({ id, todo, remove }) => {
    return (
        <>
            <li id={id}>{todo}</li>
            {/* <button className="todo-btn todo-edit" onClick={()=>edit(id, todo)}>EDIT</button> */}
            <button className="todo-btn todo-remove" onClick={()=>remove(id)}>REMOVE</button>
        </>
    )
}

export default Todo;