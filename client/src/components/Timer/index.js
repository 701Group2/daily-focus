import React, { useEffect, useState } from "react";
import { Card, CardHeader, MenuItem, Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { IconButton, makeStyles } from "@material-ui/core";
import styles from "./styles.module.scss";

const useStyles = makeStyles({
    root: {
        background: "#30A0F5",
        borderRadius: 50,
        padding: "4px 25px",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "24px",
    },
});

export default function Timer() {
    const [miliSeconds, setMiliSeconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minute, setMinutes] = useState(0);

    const [isActive, setActive] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setTimeout(() => setMiliSeconds(miliSeconds + 1), 10);
            setSeconds(Math.trunc(miliSeconds / 100) % 60);
            setMinutes(Math.trunc(miliSeconds / 6000));
        }

        //setMinutes(minute.toString().padEnd(2, 0));
        //setSeconds(seconds.toString().padEnd(2, 0));
        //setMiliSeconds(miliSeconds.toString().padEnd(2, 0));

        return () => clearTimeout(interval);
    }, [miliSeconds, seconds, minute, isActive]);

    return (
        <div className={styles.timer}>
            <p className={styles.seconds}>
                {minute.toString().padStart(2, 0)} : {seconds.toString().padStart(2, 0)} :{" "}
                {(miliSeconds % 100).toString().padStart(2, 0)}
            </p>

            <div className={styles.buttonContainer}>
                <Button
                    disabled={isActive}
                    onClick={() => setActive(true)}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Start
                </Button>

                <Button
                    disabled={!isActive}
                    onClick={() => setActive(false)}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Stop
                </Button>
            </div>
        </div>
    );
}
