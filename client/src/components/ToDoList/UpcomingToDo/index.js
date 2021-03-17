import React from "react";
import PropTypes from "prop-types";
import { CardActions, Fab, List, ListSubheader } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ToDoItem from "../ToDoItem";

function UpcomingToDo({ upcomingToDoList, switchToAdd, toggleCheck, deleteItem }) {
    return (
        <div>
            {
                Object.keys(upcomingToDoList).map(date => (
                    <List
                        disablePadding
                        subheader={
                            upcomingToDoList[date].length > 0 ?
                                <ListSubheader>
                                    {date}
                                </ListSubheader>
                            :
                                null
                        }
                    >
                        {
                            upcomingToDoList[date].map((object, index) => (
                                <ToDoItem 
                                    key={index}
                                    checked={object.checked}
                                    title={object.title}
                                    time={object.time}
                                    details={object.details}
                                    onCheckboxClicked={() => toggleCheck(index, date)}
                                    onDelete={() => deleteItem(index, date)}
                                />
                            ))
                        }
                    </List>
                ))
            }
            <CardActions>
                <Fab color="primary" size="medium" onClick={switchToAdd}>
                    <AddIcon />
                </Fab>
            </CardActions>
        </div>
    );
}

UpcomingToDo.propTypes = {
    upcomingToDoList: PropTypes.object.isRequired,
    switchToAdd: PropTypes.func.isRequired,
    toggleCheck: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};

export default UpcomingToDo;