import React, { Component } from "react";
import Plant from "./Plant";
import ControlButton from "./ContolButton";
import UserFeedback from "./UserFeedback";
import stateUtils from "./stateUtils";
import "./PlantTrees.css";

const POINTS = {
    SEEDLING: 10,
    SMALL: 20,
    FULL_GROWN: 50,
};
// This var should be saved in the server

class PlantTrees extends Component {
    constructor(props) {
        super(props); // must call this since we are overriding Component's constructor
        // initial state
        this.state = {
            plantSize: 0,
            points: 0,
            showModal: false,
            waterCoins: this.props.WaterCoins,
            feedbackText: stateUtils.feedback.start,
        };

        console.log(this.props, this.state);
    }

    handlePlantGrowth = (points) => {
        const newPoints = this.state.points + points;
        var coins = this.state.waterCoins;
        if (coins > 0) {
            coins = coins - 1;
            this.setState(() => {
                return { points: newPoints, waterCoins: coins };
            });
            if (newPoints >= POINTS.FULL_GROWN) {
                this.setState(() => ({
                    plantSize: 3,
                    feedbackText: stateUtils.feedback.win,
                }));
            } else if (newPoints >= POINTS.SMALL) {
                this.setState(() => {
                    return {
                        plantSize: 2,
                    };
                });
            } else if (newPoints >= POINTS.SEEDLING) {
                this.setState(() => {
                    return {
                        plantSize: 1,
                    };
                });
            }
        } else {
            coins = 0;
            this.setState(() => ({
                feedbackText: stateUtils.feedback.noCoin,
            }));
        }

        console.log(coins);
    };

    getProgress = () => {
        const progress = Math.round((this.state.points / POINTS.FULL_GROWN) * 100);
        return progress < 100 ? progress : 100;
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">Grow your plant</div>

                <div className="App-body">
                    {/* plant display */}
                    <Plant plantImage={stateUtils.plantImageUrls[this.state.plantSize]} />

                    {/* control buttons */}

                    <ControlButton
                        control={stateUtils.controls.water}
                        points={1}
                        onClick={this.handlePlantGrowth}
                        image={stateUtils.buttonImageUrls.water}
                    />
                    <UserFeedback
                        feedbackText={this.state.feedbackText}
                        progress={this.getProgress()}
                    />

                    <div></div>
                </div>
            </div>
        );
    }
}

export default PlantTrees;
