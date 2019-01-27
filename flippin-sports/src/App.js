import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

import NBATeamsList from "./components/NBAteams/nbaTeamList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navigation />
                </header>

                <main>
                    <Route
                        path="/nba"
                        render={props => <NBATeamsList {...props} />}
                    />
                </main>
            </div>
        );
    }
}

export default App;
