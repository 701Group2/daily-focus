import React from "react";
import "./PlantTreesModal/PlantTrees.css";
import ReactModal from "react-modal";
import PlantTrees from "./PlantTreesModal/PlantTrees";

export default function PlantButton() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="App">
            <button onClick={() => setShowModal(true)} className="plantButton">
                Plant
            </button>
            <ReactModal isOpen={showModal} contentLabel="model" ariaHideApp={false}>
                <PlantTrees></PlantTrees>
                <button onClick={() => setShowModal(false)} className="plantButton">
                    Close
                </button>
            </ReactModal>
        </div>
    );
}
