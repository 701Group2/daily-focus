/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// import "./EventView.css";

const event = (props) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="event">
            <p onClick={props.click}>
                Date: {props.date}, Month: {months[props.month]}, Title: {props.title}, Description:{" "}
                {props.description}
            </p>
            <button onClick={props.delete}>-</button>
            {props.show ? (
                <div>
                    <input
                        type="text"
                        defaultValue="change title"
                        onChange={props.changeTitle}
                        value={props.title}
                    />
                    <input
                        type="text"
                        defaultValue="change description"
                        onChange={props.changedDescription}
                        value={props.description}
                    />
                </div>
            ) : null}
        </div>
    );
};
export default event;
