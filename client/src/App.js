import React from "react";
import CalendarWidget from "./components/CalendarWidget";
// import logo from "./logo.svg";
import "./style.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/index.js</code> and save to reload.
                    <br />
                    ** DAILY FOCUS **
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
            </header>
            <body>
                <CalendarWidget />
            </body>
        </div>
    );
}

export default App;
