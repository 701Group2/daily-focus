import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

import styles from "./Header.module.scss";
import FocusLogo from "../images/focus-logo.svg";

const useStyles = makeStyles({
    root: {
        background: "#30A0F5",
        borderRadius: 50,
        padding: "4px 25px",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "1.25rem",
    },
});

export default function Header() {
    const classes = useStyles();

    return (
        <header className={styles.header}>
            <div className={styles.focusLogo}>
                <img style={{ width: 175 }} src={FocusLogo} alt="FOCUS" />
            </div>

            <div className={styles.dateTime}>10:09 AM | Monday 8 March</div>

            <div className={styles.searchBar}>Google Search</div>

            <div className={styles.addWidget}>
                <Button
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Add Widget
                </Button>
            </div>

            <div className={styles.userIcon}>:D</div>
        </header>
    );
}
