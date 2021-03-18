import React from "react";

export default function Plant({ plantImage }) {
    return (
        <div className="Plant-container">
            <img className="Plant-image" alt={plantImage} src={plantImage}></img>
        </div>
    );
}
