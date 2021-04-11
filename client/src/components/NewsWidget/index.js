import React, { useState, useEffect } from "react";
import { getArticles } from "./newsAPI";
import styles from "./style.module.scss";
import Button from "@material-ui/core/Button";
import { MenuItem, Select } from "@material-ui/core";
import ArticleItem from "./ArticleItem";

function NewsWidget() {
    const [selectedTopic, setSelectedTopic] = useState("general");
    const [selectedCountry, setsSelectedCountry] = useState("nz");

    const [articles, setArticles] = useState([]);
    const [apiError, setApiError] = useState("");

    async function apiCall() {
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

    if (apiError !== "") {
        return apiError;
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.titleText}>News</div>
                </div>

                <div className={styles.articleList}>
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <a href={article.url} target="_blank">
                                <ArticleItem key={article.title + index} props={article} />
                            </a>
                        ))
                    ) : (
                        <div className={styles.loading}> Loading... </div>
                    )}
                </div>

                <div className={styles.dropdownsContainer}>
                    <Select
                        className={styles.dropdown}
                        defaultValue="general"
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
                        className={styles.dropdown}
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
    }
}

export default NewsWidget;
