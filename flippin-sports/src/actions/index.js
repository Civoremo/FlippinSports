import axios from "axios";

export const FETCH_NBA_TEAM_INFO_START = "FETCH_NBA_TEAM_INFO_START";
export const FETCH_NBA_TEAM_INFO_SUCCESS = "FETCH_NBA_TEAM_INFO_SUCCESS";
export const FETCH_NBA_TEAM_INFO_FAILURE = "FETCH_NBA_TEAM_INFO_FAILURE";

const baseURL = "https://stats.nba.com/stats";

const teamIDs = [
    1610612737,
    1610612738,
    1610612751,
    1610612766,
    1610612741,
    1610612739,
    1610612742,
    1610612743,
    1610612765,
    1610612744,
    1610612745,
    1610612754,
    1610612746,
    1610612747,
    1610612763,
    1610612748,
    1610612749,
    1610612750,
    1610612740,
    1610612752,
    1610612760,
    1610612753,
    1610612755,
    1610612756,
    1610612757,
    1610612758,
    1610612759,
    1610612761,
    1610612762,
    1610612764,
];

export const fetchNBATeamInfo = id => dispatch => {
    dispatch({ type: FETCH_NBA_TEAM_INFO_START });
    axios({
        method: "get",
        url: `${baseURL}/teaminfocommon`,
        params: {
            Season: "2018-19",
            TeamId: `${teamIDs[id]}`,
            LeagueID: "00",
            SeasonType: "Regular Season",
        },
    })
        .then(teamInfo => {
            // console.log(teamInfo.data.resultSets[0].rowSet[0]);
            dispatch({
                type: FETCH_NBA_TEAM_INFO_SUCCESS,
                payload: teamInfo.data.resultSets,
            });
        })
        .catch(err => {
            dispatch({ type: FETCH_NBA_TEAM_INFO_FAILURE, payload: err });
        });
};
