import React from "react";
const ControlButton = ({ control, points, handlePlantGrowth, image }) => {
    return (
        <button className="ControlButton-button">
            <img
                src={image}
                alt={control}
                points={points}
                onClick={handlePlantGrowth}
                className="ControlButton-image"
            />
        </button>
    );
};

export default ControlButton;
