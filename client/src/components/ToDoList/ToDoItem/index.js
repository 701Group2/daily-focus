import React from "react";
import PropTypes from "prop-types";

function ToDoItem({ checked, text, onDelete, onCheckboxClicked }) {
    return (
        <div className="list-tile">
            <label>
                <input type="checkbox" checked={checked} onClick={onCheckboxClicked}></input>
                {
                    checked 
                        ? 
                        <s>{text}</s>
                        :
                        text
                }
                <button onClick={onDelete}>Delete</button>
            </label>
        </div>
    );
}

ToDoItem.propTypes = {
    checked: PropTypes.bool,
    text: PropTypes.string,
    onDelete: PropTypes.func,
    onCheckboxClicked: PropTypes.func
};

export default ToDoItem;
