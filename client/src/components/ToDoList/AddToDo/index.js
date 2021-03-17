import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, CardActions, CardHeader, TextField } from "@material-ui/core";
import "./styles.css";

const currentDateTime = new Date().toISOString();
const currentDate = currentDateTime.split("T")[0];
const currentTime = currentDateTime.split("T")[1].slice(0, -8);

function AddToDo({ cancelClicked, addClicked }) {
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [selectedTime, setSelectedTime] = useState(currentTime);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDetails, setCurrentDetails] = useState("");

    return (
        <div>
            <CardHeader 
                title="Add Task"
                className="todo-list-title"
            />
            <form>
                <div className="todo-add-field">
                    <TextField
                        fullWidth 
                        type="date"
                        label="Date"
                        defaultValue={currentDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
                <div className="todo-add-field">
                    <TextField 
                        fullWidth
                        type="time"
                        label="Time"
                        defaultValue={currentTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                    />
                </div>
                <div className="todo-add-field">
                    <TextField 
                        fullWidth
                        label="Title" 
                        onChange={(e) => setCurrentTitle(e.target.value)}
                    />
                </div>
                <div className="todo-add-field">
                    <TextField
                        fullWidth
                        label="Details"
                        onChange={(e) => setCurrentDetails(e.target.value)} 
                        multiline 
                    />
                </div>
        
            </form>
            <CardActions>
            <Button onClick={() => addClicked(selectedDate, selectedTime, currentTitle, currentDetails)}>
                Add Task
            </Button>
            <Button onClick={cancelClicked}>
                Cancel
            </Button>
            </CardActions>
        </div>
    );
}

AddToDo.propTypes = {
    cancelClicked: PropTypes.func.isRequired,
    addClicked: PropTypes.func.isRequired
};

export default AddToDo;