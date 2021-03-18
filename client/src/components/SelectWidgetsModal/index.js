import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

import toDoList from "../../images/toDoList.svg";
import calendar from "../../images/calendar.svg";
import timer from "../../images/timer.svg";
import styles from "./style.module.scss";
import WidgetIcon from "../WidgetIcon";

function SelectWidgetsModal() {
    const [open, setOpen] = useState(false);
    const [selectedWidgets, setSelectedWidgets] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(selectedWidgets);
    }, [selectedWidgets]);

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Manage Widgets
            </Button>
            <Dialog className={styles.dialog} open={open} onClose={handleClose}>
                <DialogTitle>
                    <p className={styles.title}>Select your widgets</p>
                </DialogTitle>
                <DialogContent className={styles.selectWidgetDialog}>
                    <Grid container spacing={3}>
                        <WidgetIcon
                            image={toDoList}
                            label="To Do List"
                            selectedWidgets={selectedWidgets}
                            setSelectedWidgets={setSelectedWidgets}
                        />
                        <WidgetIcon
                            image={calendar}
                            label="Calendar"
                            selectedWidgets={selectedWidgets}
                            setSelectedWidgets={setSelectedWidgets}
                        />
                        <WidgetIcon
                            image={timer}
                            label="Timer"
                            selectedWidgets={selectedWidgets}
                            setSelectedWidgets={setSelectedWidgets}
                        />
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SelectWidgetsModal;
