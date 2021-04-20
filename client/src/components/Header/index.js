import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./style.module.scss";
import FocusLogo from "../../images/focus-logo.svg";
import SearchBar from "../SearchBar";
import DateTime from "../DateTime";
import SelectWidgetsModal from "../SelectWidgetsModal";

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
    icon: {
        "background": "#30A0F5",
        "padding": 10,
        "&:hover": {
            backgroundColor: "#303f9f",
        },
    },
    iconLabel: {
        fill: "white",
        fontSize: "2rem",
    },
});

export default function Header({ selectedWidgets, setSelectedWidgets }) {
    const classes = useStyles();
    const [expand, setExpand] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.focusLogo}>
                <img style={{ width: 175 }} src={FocusLogo} alt="FOCUS" />
            </div>
            <div
                className={expand ? styles.collapseIcon : styles.collapseIconExpanded}
                onClick={() => setExpand(!expand)}
            >
                <div className={styles.collapseBar}></div>
                <div className={styles.collapseBar}></div>
                <div className={styles.collapseBar}></div>
            </div>
            <div className={expand ? styles.headerContainer : styles.headerContainerExpanded}>
                <div className={styles.dateTime}>
                    <DateTime />
                </div>

                <div className={styles.searchBar}>
                    <SearchBar />
                </div>

                <div className={styles.addWidget}>
                    <SelectWidgetsModal
                        selectedWidgets={selectedWidgets}
                        setSelectedWidgets={setSelectedWidgets}
                    />
                </div>

                <div className={styles.userIcon}>
                    <IconButton aria-label="user menu" classes={{ root: classes.icon }}>
                        <PersonIcon classes={{ root: classes.iconLabel }} />
                    </IconButton>
                </div>
            </div>
        </header>
    );
}
