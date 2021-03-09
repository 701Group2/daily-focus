import React from "react";
import "./style.css";

const { useState } = React;

function ToDoList() {
    const [currentValue, setCurrentValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addNewItem = e => {
        e.preventDefault();
        const newItemObject = {
            checked: false,
            text: currentValue
        };
        const newList = [...todoList, newItemObject];
        setTodoList(newList);
        setCurrentValue("");
    };

    const deleteItem = index => {
        const newList = [...todoList];
        newList.splice(index, 1);
        setTodoList(newList);
    };

    const toggleCheck = index => {
        const newList = [...todoList];
        newList[index].checked = !newList[index].checked;
        setTodoList(newList);
    };

    return (
        <div className="container">
            <h2>My Todo for the Day</h2>
            <div>
                <label>Enter your task: </label>
                <input type="text" onChange={e => setCurrentValue(e.target.value)} value={currentValue}></input>
                <button type="submit" onClick={addNewItem}>Add Task</button>
            </div>

            <div className="list-container">
                {
                    todoList.map((object, index) => (
                        <div className="list-tile" key={index}>
                            <label>
                                <input type="checkbox" checked={object.checked} onClick={() => toggleCheck(index)}></input>
                                {
                                    object.checked 
                                        ? 
                                        <s>{object.text}</s>
                                        :
                                        object.text
                                }
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ToDoList;
