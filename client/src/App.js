import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import createPersistedState from "use-persisted-state";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

const useWidgetState = createPersistedState("selectedWidgets");
=======
import CalendarWidget from "./components/CalendarWidget";
// import logo from "./logo.svg";
import "./style.css";
>>>>>>> changed file names to match our team's conventions

function App() {
    const [selectedWidgets, setSelectedWidgets] = useWidgetState([]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/signup" />
                </Route>

                <Route exact path="/signup">
                    <LandingPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/home">
                    {/* Replace following component with actual Home component when created */}
                    <Header />
                    <Body
                        selectedWidgets={selectedWidgets}
                        setSelectedWidgets={setSelectedWidgets}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
