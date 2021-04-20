import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Collapse,
    Checkbox,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    TextField,
    makeStyles,
} from "@material-ui/core";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import moment from "moment";

const useStyles = makeStyles({
    todoCheckBox: {
        color: "#30A0F5",
    },
    subItem: {
        paddingTop: 0,
        paddingBottom: 0,
        display: "flex",
        flexWrap: "wrap",
    },
    todoInputTextField: {
        width: "100%",
        margin: "10px 0",
    },
});

function ToDoItem({
    checked,
    title,
    startTime,
    endTime,
    startDate,
    endDate,
    details,
    onDelete,
    onCheckboxClicked,
    onEdit,
}) {
    const [openDetails, setOpenDetails] = useState(false);
    const [isStartTimeEditing, setIsStartTimeEditing] = useState(false);
    const [isEndTimeEditing, setIsEndTimeEditing] = useState(false);
    const [isStartDateEditing, setIsStartDateEditing] = useState(false);
    const [isEndDateEditing, setIsEndDateEditing] = useState(false);
    const [isDetailsEditing, setIsDetailsEditing] = useState(false);
    const [editedStartTime, setEditedStartTime] = useState(startTime);
    const [editedEndTime, setEditedEndTime] = useState(endTime);
    const [editedStartDate, setEditedStartDate] = useState(startDate);
    const [editedEndDate, setEditedEndDate] = useState(endDate);
    const [editedDetails, setEditedDetails] = useState(details);

    const classes = useStyles();

    return (
        <div>
            <ListItem button onClick={() => setOpenDetails(!openDetails)}>
                <ListItemIcon>
                    <Checkbox
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled className={classes.todoCheckBox} />}
                        checked={checked}
                        onChange={onCheckboxClicked}
                        color="primary"
                        className={classes.todoCheckBox}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    style={{
                        textDecoration: checked ? "line-through" : "none",
                        color: checked ? "grey" : "black",
                    }}
                />
                {(checked || openDetails) && (
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={onDelete}>
                            <RemoveCircleIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                )}
            </ListItem>
            <Collapse in={openDetails} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem classes={{ root: classes.subItem }}>
                        <ListItemIcon />
                        <ListItemText primary={"Start:"} />
                        &nbsp;
                        <TextField
                            type="time"
                            defaultValue={startTime}
                            onBlur={() => {
                                onEdit("startTime", editedStartTime);
                                setIsStartTimeEditing(!isStartDateEditing);
                            }}
                            onChange={(e) => setEditedStartTime(e.target.value)}
                            autoFocus
                            margin="20px"
                        />
                        &nbsp;
                        <TextField
                            className={classes.todoInputTextField}
                            variant="outlined"
                            type="date"
                            defaultValue={editedStartDate}
                            onChange={(e) => {
                                onEdit("startDate", editedStartDate);
                                setIsStartDateEditing(false);
                                setEditedStartDate(e.target.value);
                            }}
                        />
                    </ListItem>
                    <ListItem classes={{ root: classes.subItem }}>
                        <ListItemIcon />
                        <ListItemText primary={"End:"} />
                        &nbsp;
                        <TextField
                            type="time"
                            defaultValue={endTime}
                            onBlur={() => {
                                onEdit("endTime", editedEndTime);
                                setIsEndTimeEditing(!isStartTimeEditing);
                            }}
                            onChange={(e) => setEditedEndTime(e.target.value)}
                            autoFocus
                        />
                        &nbsp;
                        <TextField
                            className={classes.todoInputTextField}
                            variant="outlined"
                            type="date"
                            defaultValue={editedEndDate}
                            onChange={(e) => {
                                onEdit("endDate", editedEndDate);
                                setEditedEndDate(e.target.value);
                                setIsEndDateEditing(false);
                            }}
                        />
                    </ListItem>

                    <ListItem classes={{ root: classes.subItem }}>
                        <ListItemIcon />
                        {isDetailsEditing ? (
                            <TextField
                                defaultValue={details}
                                onBlur={() => {
                                    onEdit("details", editedDetails);
                                    setIsDetailsEditing(false);
                                }}
                                onChange={(e) => setEditedDetails(e.target.value)}
                                autoFocus
                                multiline
                            />
                        ) : (
                            <ListItemText
                                primary={details}
                                style={{ color: "grey" }}
                                onClick={() => setIsDetailsEditing(true)}
                            />
                        )}
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
}

ToDoItem.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheckboxClicked: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ToDoItem;
