import React from "react";

import Header from "./components/Header";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <div className="App">
            <Header />
            <ToDoList />
        </div>
    );
}

export default App;
