import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";
import { Fab, makeStyles } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
    btn: {
        background: "#30A0F5",
    },
});

export default function QuoteContent({ text, author, setIsSwitchingSubject }) {
    const classes = useStyles();

    return (
        <div>
            <p className={style.content}>{text}</p>
            <p className={style.author}>{"- " + author}</p>
            <div className={style.settingButtonDiv}>
                <Fab
                    className={style.settingButton}
                    color="primary"
                    size="medium"
                    onClick={() => setIsSwitchingSubject(true)}
                    classes={{ root: classes.btn }}
                >
                    <SettingsIcon />
                </Fab>
            </div>
        </div>
    );
}

QuoteContent.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    setIsSwitchingSubject: PropTypes.func.isRequired,
};
