import React, { useEffect, useState } from "react";
import { Card, CardActions, CardHeader, Fab, List, MenuItem, Select } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import "./style.css";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";
import UpcomingToDo from "./UpcomingToDo";

const saveListToStorage = (list) => {
    const listJson = JSON.stringify(list);
    localStorage.setItem("todoList", listJson);
};

const today = new Date().toISOString().split("T")[0];

function ToDoList() {
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [selectedTimeline, setSelectedTimeline] = useState("today");
    const [todoList, setTodoList] = useState({ [today]: [] });

    useEffect(() => {
        const savedTodoListJson = localStorage.getItem("todoList");
        if (savedTodoListJson) {
            const savedTodoList = JSON.parse(savedTodoListJson);
            setTodoList(savedTodoList);
        }
    }, []);

    const addTask = (date, time, title, details) => {
        const newTaskObject = {
            checked: false,
            time,
            title,
            details
        }
        const currentListOnThatDate = todoList[date] || [];
        const newList = [...currentListOnThatDate, newTaskObject];
        const todoListCopy = {...todoList};
        todoListCopy[date] = newList;
        setTodoList(todoListCopy);
        console.log(todoListCopy);
        setIsAddingTask(false);
        saveListToStorage(todoListCopy);
    };

    const deleteItem = (index, date) => {
        const newListOnThatDay = [...todoList[date]];
        newListOnThatDay.splice(index, 1);
        const newList = {...todoList};
        newList[date] = newListOnThatDay;
        setTodoList(newList);
        saveListToStorage(newList);
    };

    const toggleCheck = (index, date) => {
        const newListOnThatDay = [...todoList[date]];
        newListOnThatDay[index].checked = !newListOnThatDay[index].checked;
        const newList = {...todoList};
        newList[date] = newListOnThatDay;
        setTodoList(newList);
        saveListToStorage(newList);
    };

    return (
        <Card className="container">
            {isAddingTask ?
            <AddToDo 
                cancelClicked={() => setIsAddingTask(false)}
                addClicked={addTask}
            /> : 
            <div>
                <CardHeader 
                    title={
                        <Select
                            defaultValue="today" 
                            className="todo-list-title-select" 
                            disableUnderline
                            onChange={(e) => setSelectedTimeline(e.target.value)}
                        >
                            <MenuItem value="today">Today</MenuItem>
                            <MenuItem value="upcoming">Upcoming</MenuItem>
                        </Select>
                    }
                    className="todo-list-title"
                />
                {selectedTimeline === "upcoming" ?
                    <UpcomingToDo />
                    :
                    <div>
                        <List>
                            {
                                todoList[today].map((object, index) => (
                                    <ToDoItem 
                                        key={index}
                                        checked={object.checked}
                                        title={object.title}
                                        time={object.time}
                                        details={object.details}
                                        onCheckboxClicked={() => toggleCheck(index, today)}
                                        onDelete={() => deleteItem(index, today)}
                                    />
                                ))
                            }
                        </List>
                        <CardActions>
                            <Fab color="primary" size="medium" onClick={() => setIsAddingTask(true)}>
                                <AddIcon />
                            </Fab>
                        </CardActions>
                    </div>
                }
            </div>}
        </Card>
    );
}

export default ToDoList;
