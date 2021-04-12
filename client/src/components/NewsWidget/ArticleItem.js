import React, { useState } from "react";
import styles from "./style.module.scss";

export default function ArticleItem(props) {
    const article = props;
    const titleLength = 75;

    // Show blank image when it cannot load correctly
    let onImgError = (e) => {
        e.target.onerror = null;
        e.target.style.display = "none";
    };

    if (article) {
        console.log(article.props.title);
        console.log(article);
        return (
            <div className={styles.articleItem}>
                <div className={styles.articleText}>
                    {
                        // Use only part of the title if it is too long
                        article.props.title.length < titleLength
                            ? article.props.title
                            : `${article.props.title.substring(0, titleLength)}...`
                    }
                </div>

                <div className={styles.articleImage}>
                    <img
                        className={styles.img}
                        src={article.props.urlToImage}
                        onError={onImgError}
                    />
                </div>
            </div>
        );
    } else {
        return "loading..";
    }
}
