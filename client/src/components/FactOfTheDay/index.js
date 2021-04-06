import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

export default function FactOfTheDay(props) {
    const [fact, setFact] = useState("Press button to generate fact");

    async function fetchRandomFact() {
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
            .then((res) => {
                res.json().then((jsonRes) => {
                    console.log(jsonRes);
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
                    console.log(jsonRes);
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
    },[]);
    
    return (
        <div>
            <div> Fact of the Day </div>
            <p> {fact} </p>
            <div>
                <Button onClick={() => fetchRandomFact()}> Random Fact </Button>
            </div>
        </div>
    );
}
