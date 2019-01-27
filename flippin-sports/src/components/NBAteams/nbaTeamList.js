import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import NBAteam from "./nbateam";

// styled components
const NBAContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TeamsContainer = styled.div`
    width: 200px;
    margin-left: 20px;
    margin-right: 50px;
    padding-right: 30px;
    border-right: 1px solid lightgray;
`;

const TeamContent = styled.div`
    margin-bottom: 10px;

    a {
        color: #222222;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;
    }
`;

class nbaTeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                "Atlanta Hawks",
                "Boston Celtics",
                "Brooklyn Nets",
                "Charlotte Hornets",
                "Chicago Bulls",
                "Cleveland Cavaliers",
                "Dallas Mavericks",
                "Denver Nuggets",
                "Detroit Pistons",
                "Golden State Warriors",
                "Houston Rockets",
                "Indiana Pacers",
                "Los Angeles Clippers",
                "Los Angeles Lakers",
                "Memphis Grizzlies",
                "Miami Heat",
                "Milwaukee Bucks",
                "Minnesota Timberwolves",
                "New Orleans Pelicans",
                "New York Knicks",
                "Oklahoma City Thunder",
                "Orlando Magic",
                "Philadelphia 76ers",
                "Phoenix Suns",
                "Portland Trail Blazers",
                "Sacramento Kings",
                "San Antonio Spurs",
                "Toronto Raptors",
                "Utah Jazz",
                "Washington Wizards",
            ],
        };
    }

    render() {
        return (
            <NBAContainer>
                <TeamsContainer>
                    {this.state.names.map((name, index) => {
                        return (
                            <TeamContent key={index}>
                                <Link to={`/nba/${name}/${index}`}>{name}</Link>
                            </TeamContent>
                        );
                    })}
                </TeamsContainer>
                <Route
                    path={`/nba/:name/:id`}
                    render={props => <NBAteam {...props} />}
                />
            </NBAContainer>
        );
    }
}

export default nbaTeamList;
