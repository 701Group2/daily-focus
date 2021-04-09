import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import style from "./style.module.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import PauseIcon from "@material-ui/icons/Pause";
import { accessUrl, getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

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
    const [item, setItem] = useState(false);

    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            spotify.setAccessToken(_token);
            setIsLoggedIn(true);

            //not needed but just logging to show user info
            spotify.getMe().then((user) => {
                console.log(user);
            });

            spotify.getMyCurrentPlaybackState().then((track) => {
                setPlay(track.is_playing);
            });
        }
    }, []);

    const handlePlay = () => {
        spotify.getMyDevices().then((devices) => {
            if (play) {
                spotify.pause();
            } else {
                spotify
                    .play({
                        device_id: devices.devices[0]?.id,
                        context_uri: "spotify:playlist:0vvXsWCC9xrXsKd4FyS8kM",
                    })
                    .then(() => {
                        spotify.getMyCurrentPlayingTrack().then((r) => {
                            setItem(r.item);
                        });
                    });
            }
        });
    };

    const skipNext = () => {
        spotify.skipToNext().then(() => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                setItem(r.item);
                setPlay(true);
            });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious().then(() => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                setItem(r.item);
                setPlay(true);
            });
        });
    };

    return (
        <div className={style.spotify}>
            <div className={style.spotifyTitle}>
                <div className={style.spotifyTitleText}>Spotify</div>
            </div>
            {!isLoggedIn ? (
                <Button
                    href={accessUrl}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Login with Spotify
                </Button>
            ) : (
                <div className={style.spotifyBody}>
                    <img
                        className={style.songImage}
                        src={item?.album?.images[0]?.url}
                        alt={item?.album?.name}
                    />
                    <div>
                        <IconButton aria-label="rewind" onClick={skipPrevious}>
                            <FastRewindIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            aria-label="play"
                            onClick={() => {
                                setPlay(!play);
                                handlePlay();
                            }}
                        >
                            {play ? (
                                <PauseIcon fontSize="large" />
                            ) : (
                                <PlayArrowIcon fontSize="large" />
                            )}
                        </IconButton>
                        <IconButton aria-label="fastforward" onClick={skipNext}>
                            <FastForwardIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    );
}
