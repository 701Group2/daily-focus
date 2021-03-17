import React from "react";
import PropTypes from "prop-types";
import { CardActions, Fab, List } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ToDoItem from "../ToDoItem";

function TodaysToDo({ todaysDate, todoList, switchToAdd, toggleCheck, deleteItem }) {
    return (
        <div>
            <List disablePadding>
                {
                    todoList.map((object, index) => (
                        <ToDoItem 
                            key={index}
                            checked={object.checked}
                            title={object.title}
                            time={object.time}
                            details={object.details}
                            onCheckboxClicked={() => toggleCheck(index, todaysDate)}
                            onDelete={() => deleteItem(index, todaysDate)}
                        />
                    ))
                }
            </List>
            <CardActions>
                <Fab color="primary" size="medium" onClick={() => switchToAdd()}>
                    <AddIcon />
                </Fab>
            </CardActions>
        </div>
    );
}

TodaysToDo.propTypes = {
    upcomingToDoList: PropTypes.object.isRequired,
    switchToAdd: PropTypes.func.isRequired,
    toggleCheck: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};

export default TodaysToDo;