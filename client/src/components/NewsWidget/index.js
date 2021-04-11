import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "@material-ui/core/Button";
import { MenuItem, Select } from "@material-ui/core";

function NewsWidget() {
    const [selectedTopic, setSelectedTopic] = useState("sports");
    const [selectedCountry, setsSelectedCountry] = useState("nz");

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.titleText}>News</div>
            </div>

            <div>News articles go here</div>

            <div className={styles.dropdownsContainer}>
                <Select
                    defaultValue="sports"
                    disableUnderline
                    onChange={(e) => setSelectedTopic(e.target.value)}
                >
                    <MenuItem value="sports">Sports</MenuItem>
                    <MenuItem value="politics">Politics</MenuItem>
                </Select>

                <Select
                    defaultValue="nz"
                    disableUnderline
                    onChange={(e) => setsSelectedCountry(e.target.value)}
                >
                    <MenuItem value="nz">New Zealand</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default NewsWidget;
