import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import style from "./style.module.scss";

export default function FactOfTheDay(props) {
    const [fact, setFact] = useState("Press button to generate fact");

    async function fetchRandomFact() {
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
            .then((res) => {
                res.json().then((jsonRes) => {
                    if (jsonRes.text) {
                        setFact(jsonRes.text);
                    } else {
                        setFact("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setFact("Sorry, could not get quote");
            });
    }

    async function fetchTodayFact() {
        fetch("https://uselessfacts.jsph.pl/today.json?language=en")
            .then((res) => {
                res.json().then((jsonRes) => {
                    if (jsonRes.text) {
                        setFact(jsonRes.text);
                    } else {
                        setFact("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setFact("Sorry, could not get quote");
            });
    }

    useEffect(() => {
        fetchTodayFact();
    }, []);

    return (
        <div className={style.fact}>
            <div className={style.factTitle}>
                <div className={style.factTitleText}> Fact of the Day </div>
            </div>

            <div className={style.contentContainer}>
                <p className={style.content}> {fact} </p>
            </div>

            <div className={style.buttonContainer}>
                <Button
                    onClick={() => fetchRandomFact()}
                    variant="contained"
                    color="primary"
                    classes={{ root: style.root, label: style.label }}
                >
                    Random Fact
                </Button>
            </div>
        </div>
    );
}
