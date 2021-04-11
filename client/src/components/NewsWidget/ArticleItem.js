import React from "react";
import styles from "./style.module.scss";

export default function ArticleItem(props) {
    const article = props;

    if (article) {
        return (
            <div className={styles.articleItem}>
                <div className={styles.articleText}>{article.props.title}</div>

                <div className={styles.articleImage}>
                    <img src={article.props.urlToImage} alt={article.props.description} />
                </div>
            </div>
        );
    } else {
        return "loading..";
    }
}
