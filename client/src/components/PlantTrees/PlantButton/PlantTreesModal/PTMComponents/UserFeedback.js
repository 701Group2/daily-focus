import React from "react";

const UserFeedback = ({ feedbackText, progress }) => {
    return (
        <div className="UserFeedback">
            <progress value={progress / 100} />
            <h4>Progress: {progress}% grown</h4>
            {feedbackText}
        </div>
    );
};

export default UserFeedback;
