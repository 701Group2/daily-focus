import React from "react";

import Header from "./components/Header";
import Timer from "./components/Timer";
import "./App.css";
import { Timer } from "@material-ui/icons";

function App() {
    return (
        <div className="App">
            <Header />
            <Timer />
        </div>
    );
}

export default App;
