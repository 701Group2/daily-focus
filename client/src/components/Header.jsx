import React from "react";

import styles from "./header.module.scss";

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.focusLogo}>
            FOCUS
        </div>

        <div className={styles.dateTime}>
            10:09 AM | Monday 8 March
        </div>

        <div className={styles.searchBar}>
            Google Search
        </div>

        <div className={styles.addWidget}>
            Add Widget
        </div>

        <div className={styles.userIcon}>
            :D
        </div>
    </header>;
}
