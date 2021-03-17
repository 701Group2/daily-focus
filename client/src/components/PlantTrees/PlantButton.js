import React, { Component } from "react";
import "./PlantTrees.css";
import ReactModal from "react-modal";
import PlantTrees from "./PlantTrees";

var WaterCoins = 100;
class PlantButton extends Component {
    constructor(props) {
        super(props); // must call this since we are overriding Component's constructor
        // initial state
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            showModal: false,
        };
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleOpenModal}>Plant</button>
                <ReactModal isOpen={this.state.showModal} contentLabel="model" ariaHideApp={false}>
                    <PlantTrees WaterCoins={WaterCoins}></PlantTrees>
                    <button onClick={this.handleCloseModal} className="CloseButton">
                        Close
                    </button>
                </ReactModal>
            </div>
        );
    }
}

export default PlantButton;
