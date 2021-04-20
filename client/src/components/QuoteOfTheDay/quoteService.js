async function fetchKanyeQuote(setText, setAuthor) {
    return fetch("https://api.kanye.rest")
        .then(async (res) => {
            return res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor("Kanye West");
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchInspirationalQuote(setText, setAuthor) {
    return fetch("https://type.fit/api/quotes")
        .then(async (res) => {
            return res.json().then((jsonRes) => {
                const quoteIndex = Math.floor(Math.random() * jsonRes.length);
                const newQuote = jsonRes[quoteIndex];
                if (newQuote) {
                    setText('"' + newQuote.text + '"');
                    setAuthor(newQuote.author || "unknown");
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchProgrammingQuote(setText, setAuthor) {
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then(async (res) => {
            return res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor(jsonRes.author);
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchTaylorSwiftQuote(setText, setAuthor) {
    return fetch("https://api.taylor.rest/")
        .then(async (res) => {
            return res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor("Taylor Swift");
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchAnimeQuote(setText, setAuthor) {
    return fetch("https://animechan.vercel.app/api/random")
        .then(async (res) => {
            return res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor(jsonRes.character + ", " + jsonRes.anime);
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

export {
    fetchKanyeQuote,
    fetchInspirationalQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
};
