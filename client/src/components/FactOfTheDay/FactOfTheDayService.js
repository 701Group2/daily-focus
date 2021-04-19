function fetchRandomFact(setFact) {
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

function fetchTodayFact(setFact) {
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

export { fetchRandomFact, fetchTodayFact };
