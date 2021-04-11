import React, { useState, useEffect } from "react";
import { getArticles } from "./newsAPI";
import styles from "./style.module.scss";
import Button from "@material-ui/core/Button";
import { MenuItem, Select } from "@material-ui/core";
import ArticleItem from "./ArticleItem";

function NewsWidget() {
    const [selectedTopic, setSelectedTopic] = useState("sports");
    const [selectedCountry, setsSelectedCountry] = useState("nz");

    const [articles, setArticles] = useState([]);
    const [apiError, setApiError] = useState("");

    async function apiCall() {
        // console.log("heyyyyy")

        try {
            const response = await getArticles(selectedTopic, selectedCountry);
            setArticles(response);
        } catch (error) {
            setApiError("Could not find any articles");
        }
    }

    useEffect(() => {
        apiCall();
    }, [selectedCountry, selectedTopic]);

    if (articles.length > 0) {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.titleText}>News</div>
                </div>

                <div className={styles.articleList}>
                    {articles.map((article, index) => (
                        <a href={article.url} target="_blank">
                            <ArticleItem key={article.title + index} props={article} />
                        </a>
                    ))}
                    News articles go here hyayyyyyyyyyyyyyyyyyyy
                </div>

                <div className={styles.dropdownsContainer}>
                    <Select
                        defaultValue="sports"
                        disableUnderline
                        onChange={(e) => setSelectedTopic(e.target.value)}
                    >
                        <MenuItem value="sports">Sports</MenuItem>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="health">Health</MenuItem>
                        <MenuItem value="entertainment">Entertainment</MenuItem>
                        <MenuItem value="science">Science</MenuItem>
                        <MenuItem value="technology">Tech</MenuItem>
                        <MenuItem value="general">General</MenuItem>
                    </Select>

                    <Select
                        defaultValue="nz"
                        disableUnderline
                        onChange={(e) => setsSelectedCountry(e.target.value)}
                    >
                        <MenuItem value="nz">New Zealand</MenuItem>
                        <MenuItem value="us">USA</MenuItem>
                        <MenuItem value="au">Australia</MenuItem>
                    </Select>
                </div>
            </div>
        );
    } else {
        return "loading..";
    }
}

export default NewsWidget;
