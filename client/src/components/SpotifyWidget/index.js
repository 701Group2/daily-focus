import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import style from "./style.module.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import PauseIcon from "@material-ui/icons/Pause";

const useStyles = makeStyles({
    root: {
        margin: "30px 20px",
        background: "#1DB954",
        borderRadius: 50,
        padding: "4px 25px",
        width: "calc(100% - 40px)",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "24px",
    },
});

export default function SpotifyWidget() {
    const classes = useStyles();
    const [play, setPlay] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className={style.spotify}>
            <div className={style.spotifyTitle}>
                <div className={style.spotifyTitleText}>Spotify</div>
            </div>
            {!isLoggedIn ? (
                <Button
                    onClick={() => {
                        setIsLoggedIn(true);
                    }}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Login with Spotify
                </Button>
            ) : (
                <div className={style.spotifyBody}>
                    {/* replace this div with an image of the song or playlist */}
                    <div className={style.songImage} />
                    <div>
                        <IconButton aria-label="rewind">
                            <FastRewindIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            aria-label="play"
                            onClick={() => {
                                setPlay(!play);
                            }}
                        >
                            {play ? (
                                <PauseIcon fontSize="large" />
                            ) : (
                                <PlayArrowIcon fontSize="large" />
                            )}
                        </IconButton>
                        <IconButton aria-label="fastforward">
                            <FastForwardIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    );
}
