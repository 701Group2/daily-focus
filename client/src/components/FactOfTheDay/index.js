import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import style from "./style.module.scss";
import { fetchRandomFact, fetchTodayFact } from "./FactOfTheDayService";

export default function FactOfTheDay(props) {
    const useStyles = makeStyles({
        root: {
            margin: "0px 10px 0px 10px",
            background: "#30A0F5",
            borderRadius: 50,
            padding: "4px 25px",
        },
        label: {
            textTransform: "capitalize",
            fontSize: "24px",
        },
    });

    const [fact, setFact] = useState("Press button to generate fact");
    const classes = useStyles();

    useEffect(() => {
        fetchTodayFact(setFact);
    }, []);

    return (
        <div className={style.fact}>
            <div className={style.factTitle}>
                <div className={style.factTitleText}>Fact of the Day</div>
            </div>
            <div className={style.contentContainer}>
                <p className={style.content}>{fact}</p>
            </div>
            <div className={style.buttonContainer}>
                <Button
                    onClick={() => fetchRandomFact(setFact)}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.root, label: classes.label }}
                >
                    Random Fact
                </Button>
            </div>
        </div>
    );
}
