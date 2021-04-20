import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import style from "./style.module.scss";

const useStyles = makeStyles({
    root: {
        margin: "0px 10px 0px 10px",
        background: "#30A0F5",
        borderRadius: 50,
        padding: "4px 25px",
        width: "120px",
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

    const [isActive, setIsActive] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setTimeout(() => setMiliSeconds(miliSeconds + 1), 10);
            setSeconds(Math.trunc(miliSeconds / 100) % 60);
            setMinutes(Math.trunc(miliSeconds / 6000));
        }

        return () => clearTimeout(interval);
    }, [miliSeconds, seconds, minute, isActive]);

    const reset = () => {
        setMiliSeconds(0);
        setSeconds(0);
        setMinutes(0);
        setIsActive(false);
    };

    return (
        <div className={style.timer}>
            <div className={style.timerTitle}>
                <div className={style.timerTitleText}>Timer</div>
            </div>

            <p className={style.seconds}>
                {minute.toString().padStart(2, 0)} : {seconds.toString().padStart(2, 0)} :{" "}
                {(miliSeconds % 100).toString().padStart(2, 0)}
            </p>

            <div className={style.buttonContainer}>
                <Button
                    onClick={() => setIsActive(!isActive)}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    {isActive ? "Stop" : "Start"}
                </Button>
                <Button
                    onClick={() => reset()}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}
