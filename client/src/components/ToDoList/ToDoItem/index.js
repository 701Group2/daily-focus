import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse, Checkbox, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import "./style.css"
import moment from "moment";

function ToDoItem({ checked, title, time, details, onDelete, onCheckboxClicked }) {
    const [openDetails, setOpenDetails] = useState(false);

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
                        <ListItemText primary={moment(time, "HH:mm").format("h:mma")} style={{ color: "grey" }} />
                    </ListItem>
                    <ListItem className="sub-item">
                        <ListItemIcon />
                        <ListItemText primary={details} style={{ color: "grey" }} />
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
    onCheckboxClicked: PropTypes.func.isRequired
};

export default ToDoItem;
