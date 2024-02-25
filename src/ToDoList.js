import React, { useState } from "react";
import Todo from './Todo';
import './ToDoList.css';
import NewTodoForm from "./NewTodoForm";
const { v4: uuidv4 } = require('uuid');


const ToDoList = () => {
    // const [editMode, setEditMode] = useState([false, {}]);
    
    const INITIAL_STATE = [];
    const [toDos, setToDos] = useState(INITIAL_STATE);

    const addToDo = (newTodo) => {
        return setToDos(toDos => [...toDos,
        { ...newTodo, id: uuidv4() }
        ]);
    };

    const remove = (id) => {
        return setToDos(toDos.filter(i => i.id !== id));
    }

    // const edit = (id, todo) => {
    //     return setEditMode([true, {
    //         id: id,
    //         todo: todo
    //     }]);
    // }

    // const renderInEditMode = () => {
    //     const [...obj] = editMode;
    //     console.log(obj)
    // toDos.map(i => {
    //     return i.id !== id ? i :
    //         (<input
    //             type="text"
    //             name="todo"
    //             id="todo"
    //             value={todo}
    //             onChange={addToDo}
    //         />)
    // })
    // setEditMode(true);
    // return renderInEditMode;

    return (
        <div>
            <h3>To Do List:</h3>
            <NewTodoForm addToDo={addToDo} />
            <ul>
                {toDos.map(todo =>
                (<Todo
                    key={todo.id}
                    id={todo.id}
                    // edit={edit}
                    remove={remove}
                    todo={todo.todo}
                />))}
            </ul>
        </div>
    )
}






export default ToDoList;