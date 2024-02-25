import React, { useState } from "react";
import './NewTodoForm.css';


const NewTodoForm = ({ addToDo }) => {
    const INITIAL_STATE = {
        todo: ''
    }
    const [notValid, setNotValid] = useState(true);
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { todo } = formData;
        if (todo.length >= 3) {
            addToDo({ ...formData });
            setFormData(INITIAL_STATE);
        } else {
            alert('Please enter a task')
        }

    };

    return (
        <form className="new-todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo">Enter a task:</label>
            <input
                type="text"
                name="todo"
                placeholder=""
                id="todo"
                value={formData.todo}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add!</button>
        </form>
    )
}

export default NewTodoForm;