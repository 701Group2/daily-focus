import React, { useEffect, useState } from "react";
import createPersistedState from "use-persisted-state";
import { CircularProgress } from "@material-ui/core";
import style from "./style.module.scss";
import SwitchCategory from "./SwitchCategory";
import QuoteContent from "./QuoteContent";
import {
    fetchKanyeQuote,
    fetchInspirationalQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
} from "./quoteService";

const quoteCategories = [
    {
        value: "inspirational",
        text: "Inspirational",
        fetchQuote: (textHandler, authorHandler) =>
            fetchInspirationalQuote(textHandler, authorHandler),
    },
    {
        value: "taylor-swift",
        text: "Taylor Swift",
        fetchQuote: (textHandler, authorHandler) =>
            fetchTaylorSwiftQuote(textHandler, authorHandler),
    },
    {
        value: "kanye-west",
        text: "Kanye West",
        fetchQuote: (textHandler, authorHandler) => fetchKanyeQuote(textHandler, authorHandler),
    },
    {
        value: "programming",
        text: "Programming",
        fetchQuote: (textHandler, authorHandler) =>
            fetchProgrammingQuote(textHandler, authorHandler),
    },
    {
        value: "anime",
        text: "Anime ( ͡° ͜ʖ ͡°)",
        fetchQuote: (textHandler, authorHandler) => fetchAnimeQuote(textHandler, authorHandler),
    },
];

const useQuoteCategoryState = createPersistedState("quoteCategory");

export default function QuoteOfTheDay() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSwitchingSubject, setIsSwitchingSubject] = useState(false);
    const [category, setCategory] = useQuoteCategoryState("inspirational");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        quoteCategories.forEach(async (cat) => {
            if (cat.value === category) {
                await cat.fetchQuote(setText, setAuthor);
                setIsLoading(false);
            }
        });
    }, [category]);

    /**
     * Callback for when a new category is selected
     * @param value The new category
     */
    function updateContent(value) {
        setIsLoading(true);
        setCategory(value);
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <span className={style.title__text}>Quote of the day</span>
            </div>
            {isSwitchingSubject ? (
                <SwitchCategory
                    categories={quoteCategories}
                    cancelClicked={() => setIsSwitchingSubject(false)}
                    updateCategory={updateContent}
                    currentCategory={category}
                />
            ) : isLoading ? (
                <div className={style.loading}>
                    <CircularProgress />
                </div>
            ) : (
                <QuoteContent
                    text={text}
                    author={author}
                    setIsSwitchingSubject={setIsSwitchingSubject}
                />
            )}
        </div>
    );
}
