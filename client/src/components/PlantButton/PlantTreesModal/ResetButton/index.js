import React from "react";
import styles from "./style.module.scss";

function ResetButton({ resetPlant, image }) {
    return (
        <button className={styles.button}>
            <img src={image} onClick={resetPlant} className={styles.image} />
        </button>
    );
}

export default ResetButton;
