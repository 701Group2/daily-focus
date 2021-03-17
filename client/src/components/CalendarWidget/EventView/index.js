import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";

<<<<<<< HEAD
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
=======
const compareDate = (day1, day2) => {
    return (
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate()
    );
};

export default function EventView({ selected, events }) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
>>>>>>> added event display functionality to the EventView component

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//evaluates truthy if the two date objects have the same day
const compareDate = (day1, day2) => {
    return (
<<<<<<< HEAD
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate() &&
        day1.getDay() === day2.getDay()
    );
};

//formats the time of day of the date object
const formatTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
};

const gridStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: "350px",
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        fontFamily: "'Ropa Sans'",
    },

    buttonStyle: {
        background: "#30A0F5",
        border: 0,
        borderRadius: 32,
        color: "white",
        height: 44,
        padding: "5px 10px",
    },
}));

export default function EventView({ selected, events, onRemoveEvent }) {
    const gridStyles = gridStyle();

    return (
        <Grid className={gridStyles.root} item xs={12} md={6}>
            <Typography variant="h5" className={gridStyles.title}>
                {days[selected.getDay()]} {selected.getDate()} {months[selected.getMonth()]},{" "}
                {selected.getFullYear()}
            </Typography>
            <List>
                {events.map((event, index) =>
                    compareDate(selected, event.date) ? (
                        <ListItem key={index}>
                            <Typography variant="h6" className={gridStyles.title}>
                                {formatTime(event.date)} {event.title}
                            </Typography>
                            <Typography variant="h7" className={gridStyles.title}>
                                {event.description}
                            </Typography>
                            <IconButton
                                className={gridStyles.buttonStyle}
                                edge="end"
                                aria-label="delete"
                                onClick={() => onRemoveEvent(events.indexOf(event))}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ) : null
                )}
            </List>
        </Grid>
=======
        <div>
            <h2>
                {selected.getDate()} {months[selected.getMonth()]}
            </h2>
            <ul>
                {events.map((event) =>
                    compareDate(selected, event.date) ? (
                        <div>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    ) : null
                )}
            </ul>
            <button onClick={() => console.log("trying to add event for: ", selected.getDate())}>
                Add Event
            </button>
        </div>
>>>>>>> added event display functionality to the EventView component
    );
}

EventView.propTypes = {
    selected: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    onRemoveEvent: PropTypes.func,
};
