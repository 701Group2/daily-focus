import React from "react";
import PropTypes from "prop-types";
import { CardActions, Fab, List, ListSubheader, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ToDoItem from "../ToDoItem";
import PlantButton from "../../PlantButton";
import moment from "moment";

const useStyles = makeStyles({
    fab: {
        backgroundColor: "#30A0F5",
    },
    cardActions: {
        justifyContent: "flex-end",
    },
});

function UpcomingToDo({
    upcomingToDoList,
    switchToAdd,
    toggleCheck,
    deleteItem,
    editItem,
    taskPoints,
    onSpendPoint,
}) {
    const classes = useStyles();

    return (
        <div>
            {Object.keys(upcomingToDoList).map((date) => (
                <List
                    disablePadding
                    subheader={
                        upcomingToDoList[date].length > 0 ? (
                            <ListSubheader>
                                {moment(date).format("ddd MMMM Do, YYYY")}
                            </ListSubheader>
                        ) : null
                    }
                >
                    {upcomingToDoList[date].map((object, index) => (
                        <ToDoItem
                            key={index}
                            checked={object.checked}
                            title={object.title}
                            startTime={object.startTime}
                            endTime={object.endTime}
                            startDate={object.startDate}
                            endDate={object.endDate}
                            details={object.details}
                            onCheckboxClicked={() => toggleCheck(index, date)}
                            onDelete={() => deleteItem(index, date)}
                            onEdit={(field, newValue) => editItem(index, date, field, newValue)}
                        />
                    ))}
                </List>
            ))}
            <CardActions className={classes.cardActions}>
                <PlantButton taskPoints={taskPoints} onSpendPoint={onSpendPoint} />
                <Fab className={classes.fab} color="primary" size="medium" onClick={switchToAdd}>
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
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
};

export default UpcomingToDo;
