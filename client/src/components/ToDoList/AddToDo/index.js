import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Button, CardActions, CardHeader, TextField, makeStyles } from "@material-ui/core";
import styles from "./style.module.scss";

const useStyles = makeStyles({
    todoListTitle: {
        borderRadius: "25px 25px 0 0",
        fontSize: "24px",
        height: "16px",
        width: "308px",
        textAlign: "center",
        backgroundColor: "#30A0F5",
        color: "white",
        marginBottom: "1.5vh",
    },
    todoInputTextField: {
        [`& fieldset`]: {
            borderRadius: "40px",
        },
    },
    primaryButton: {
        backgroundColor: "#30A0F5",
        color: "white",
        borderRadius: "20px",
    },
    cardActions: {
        justifyContent: "flex-end",
    },
    cancelButton: {
        backgroundColor: "white",
        color: "black",
        borderColor: "#30A0F5",
        borderRadius: "20px",
    },
});

function AddToDo({ cancelClicked, addClicked }) {
    const currentDate = moment().format("YYYY-MM-D");
    const currentTime = moment().format("HH:mm");

    const [startDate, setStartDate] = useState(currentDate);
    const [startTime, setStartTime] = useState(currentTime);
    const [endDate, setEndDate] = useState(currentDate);
    const [endTime, setEndTime] = useState(currentTime);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDetails, setCurrentDetails] = useState("");

    const classes = useStyles();

    return (
        <div className={styles.container}>
            <CardHeader title="Add Task" className={classes.todoListTitle} disableTypography />
            <form className={styles.form}>
                <div className={styles.todoAddField}>
                    <TextField
                        className={classes.todoInputTextField}
                        fullWidth
                        variant="outlined"
                        type="date"
                        label="Start Date"
                        defaultValue={currentDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className={styles.todoAddField}>
                    <TextField
                        fullWidth
                        className={classes.todoInputTextField}
                        variant="outlined"
                        type="time"
                        label="Start Time"
                        defaultValue={currentTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div className={styles.todoAddField}>
                    <TextField
                        className={classes.todoInputTextField}
                        fullWidth
                        variant="outlined"
                        type="date"
                        label="End Date"
                        defaultValue={currentDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className={styles.todoAddField}>
                    <TextField
                        fullWidth
                        className={classes.todoInputTextField}
                        variant="outlined"
                        type="time"
                        label="End Time"
                        defaultValue={currentTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>
                <div className={styles.todoAddField}>
                    <TextField
                        fullWidth
                        className={classes.todoInputTextField}
                        variant="outlined"
                        label="Title"
                        onChange={(e) => setCurrentTitle(e.target.value)}
                    />
                </div>
                <div className={styles.todoAddField}>
                    <TextField
                        fullWidth
                        className={classes.todoInputTextField}
                        variant="outlined"
                        label="Details"
                        onChange={(e) => setCurrentDetails(e.target.value)}
                        multiline
                    />
                </div>
            </form>
            <CardActions className={classes.cardActions}>
                <Button
                    className={classes.primaryButton}
                    color="primary"
                    variant="contained"
                    onClick={() =>
                        addClicked(
                            startDate,
                            startTime,
                            endDate,
                            endTime,
                            currentTitle,
                            currentDetails
                        )
                    }
                >
                    Add Task
                </Button>
                <Button className={classes.cancelButton} variant="outlined" onClick={cancelClicked}>
                    Cancel
                </Button>
            </CardActions>
        </div>
    );
}

AddToDo.propTypes = {
    cancelClicked: PropTypes.func.isRequired,
    addClicked: PropTypes.func.isRequired,
};

export default AddToDo;
