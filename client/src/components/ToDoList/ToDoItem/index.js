import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse, Checkbox, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, TextField } from "@material-ui/core";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import "./style.css";
import moment from "moment";

function ToDoItem({ checked, title, time, details, onDelete, onCheckboxClicked, onEdit }) {
    const [openDetails, setOpenDetails] = useState(false);
    const [isTimeEditing, setIsTimeEditing] = useState(false);
    const [isDetailsEditing, setIsDetailsEditing] = useState(false);
    const [editedTime, setEditedTime] = useState(time);
    const [editedDetails, setEditedDetails] = useState(details);

    return (
        <div>
            <ListItem button onClick={() => setOpenDetails(!openDetails)}>
                <ListItemIcon>
                    <Checkbox 
                        checked={checked}
                        onChange={onCheckboxClicked}
                        color="primary"
                    />
                </ListItemIcon>
                <ListItemText 
                    primary={title} 
                    style={{
                        textDecoration: checked ? "line-through" : "none",
                        color: checked ? "grey" : "black"
                    }}  
                />
                {(checked || openDetails) && 
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={onDelete}>
                            <RemoveCircleIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                }
            </ListItem>
            <Collapse in={openDetails} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className="sub-item">
                        <ListItemIcon />
                        {
                            isTimeEditing ?
                                <TextField
                                    type="time" 
                                    defaultValue={time} 
                                    onBlur={() => {
                                        onEdit("time", editedTime);
                                        setIsTimeEditing(false);
                                    }} 
                                    onChange={(e) => setEditedTime(e.target.value)}
                                    autoFocus 
                                />
                            :
                                <ListItemText 
                                    primary={moment(time, "HH:mm").format("h:mma")} 
                                    style={{ color: "grey" }} 
                                    onClick={() => setIsTimeEditing(true)}
                                />
                        }
                    </ListItem>
                    <ListItem className="sub-item">
                        <ListItemIcon />
                        {
                            isDetailsEditing ?
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
                            :
                                <ListItemText primary={details} style={{ color: "grey" }} onClick={() => setIsDetailsEditing(true)} />
                        }
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
}

ToDoItem.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheckboxClicked: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default ToDoItem;
