import React, { useEffect, useState } from "react";
import { Card, CardHeader, MenuItem, Select } from "@material-ui/core";
import styles from "./styles.module.scss";

function Timer() {
    return (
        <div className={styles.card}>
            <div className={styles.timeCount}>00:00:00</div>
        </div>
    );
}
export default Timer;
