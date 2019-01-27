import {
    FETCH_NBA_TEAM_INFO_START,
    FETCH_NBA_TEAM_INFO_SUCCESS,
    FETCH_NBA_TEAM_INFO_FAILURE,
} from "../../actions";

const initialState = {
    teamInfoCommonHeaders: [],
    teamInfoCommonData: [],
    teamInfoSeasonRanksHeaders: [],
    teamInfoSeasonRanksData: [],
    teamInfoAvailableSeasonsHeaders: [],
    teamInfoAvailableSeasonsData: [],
    fetchigTeamInfo: false,
    error: null,
};

export const nbaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NBA_TEAM_INFO_START:
            return {
                ...state,
                fetchigTeamInfo: true,
            };
        case FETCH_NBA_TEAM_INFO_SUCCESS:
            return {
                ...state,
                error: null,
                fetchigTeamInfo: false,
                teamInfoCommonHeaders: action.payload[0].headers,
                teamInfoCommonData: action.payload[0].rowSet[0],
                teamInfoSeasonRanksHeaders: action.payload[1].headers,
                teamInfoSeasonRanksData: action.payload[1].rowSet[0],
            };
        case FETCH_NBA_TEAM_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchigTeamInfo: false,
            };
        default:
            return state;
    }
};
