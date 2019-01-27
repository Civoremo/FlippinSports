import React from "react";
import { connect } from "react-redux";
import { fetchNBATeamInfo } from "../../actions";

class nbaTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
        };
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.match.params.id) {
            this.setState({
                id: this.props.match.params.id,
            });
            const id = this.props.match.params.id;
            console.log(id, this.props.match.params.name);
            this.props.fetchNBATeamInfo(id);
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchNBATeamInfo(id);
        this.setState({ id: id });
    }

    render() {
        if (this.props.teamInfoCommonHeaders.length === 0) {
            return <>Loading team info</>;
        }

        return (
            <div>
                <div>
                    {this.props.teamInfoCommonHeaders.map((header, index) => {
                        return (
                            <div key={index}>
                                {header}
                                ---->
                                <span
                                    key={
                                        index +
                                        this.props.teamInfoCommonHeaders[0]
                                    }
                                >
                                    {this.props.teamInfoCommonData[index]}
                                </span>
                            </div>
                        );
                    })}
                </div>
                {this.props.teamInfoSeasonRanksHeaders.map((header, index) => {
                    return (
                        <div key={index}>
                            {header}
                            --->
                            <span
                                key={
                                    index +
                                    this.props.teamInfoSeasonRanksData[2]
                                }
                            >
                                {this.props.teamInfoSeasonRanksData[index]}
                            </span>
                        </div>
                    );
                })}
                <div />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        teamInfoCommonHeaders: state.nbaReducer.teamInfoCommonHeaders,
        teamInfoCommonData: state.nbaReducer.teamInfoCommonData,
        teamInfoSeasonRanksHeaders: state.nbaReducer.teamInfoSeasonRanksHeaders,
        teamInfoSeasonRanksData: state.nbaReducer.teamInfoSeasonRanksData,
        fetchingInfo: state.nbaReducer.fetchigTeamInfo,
    };
};

export default connect(
    mapStateToProps,
    { fetchNBATeamInfo }
)(nbaTeam);
