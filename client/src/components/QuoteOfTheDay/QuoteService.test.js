import {
    fetchKanyeQuote,
    fetchInspirationalQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
} from "./quoteService";

let text;
let author;
async function setText(newText) {
    text = newText;
}
async function setAuthor(newAuthor) {
    author = newAuthor;
}

beforeEach(() => {
    text = "";
    author = "";
});

test("It fetches Kanye West quotes correctly", async () => {
    await fetchKanyeQuote(setText, setAuthor);

    expect(typeof text).toBe("string");
    expect(typeof author).toBe("string");
    expect(text).not.toEqual("");
    expect(text).not.toEqual("Sorry, could not get quote");
    expect(author).toEqual("Kanye West");
});

test("It fetches inspirational quotes correctly", async () => {
    await fetchInspirationalQuote(setText, setAuthor);

    expect(typeof text).toBe("string");
    expect(typeof author).toBe("string");
    expect(text).not.toEqual("");
    expect(text).not.toEqual("Sorry, could not get quote");
    expect(author).not.toEqual("");
});

test("It fetches Taylor Swift quotes correctly", async () => {
    await fetchTaylorSwiftQuote(setText, setAuthor);

    expect(typeof text).toBe("string");
    expect(typeof author).toBe("string");
    expect(text).not.toEqual("");
    expect(text).not.toEqual("Sorry, could not get quote");
    expect(author).toEqual("Taylor Swift");
});

test("It fetches programming quotes correctly", async () => {
    await fetchProgrammingQuote(setText, setAuthor);

    expect(typeof text).toBe("string");
    expect(typeof author).toBe("string");
    expect(text).not.toEqual("");
    expect(text).not.toEqual("Sorry, could not get quote");
    expect(author).not.toEqual("");
});

test("It fetches anime quotes correctly", async () => {
    await fetchAnimeQuote(setText, setAuthor);

    expect(typeof text).toBe("string");
    expect(typeof author).toBe("string");
    expect(text).not.toEqual("");
    expect(text).not.toEqual("Sorry, could not get quote");
    expect(author).not.toEqual("");
}, 10000);
