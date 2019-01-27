import {
    FETCH_NBA_TEAM_INFO_START,
    FETCH_NBA_TEAM_INFO_SUCCESS,
    FETCH_NBA_TEAM_INFO_FAILURE,
    FETCH_TEAMROSTER_START,
    FETCH_TEAMROSTER_SUCCESS,
    FETCH_TEAMROSTER_FAILURE,
} from "../../actions";

const initialState = {
    // team common info
    teamInfoCommonHeaders: [],
    teamInfoCommonData: [],
    teamInfoSeasonRanksHeaders: [],
    teamInfoSeasonRanksData: [],
    teamInfoAvailableSeasonsHeaders: [],
    teamInfoAvailableSeasonsData: [],
    fetchigTeamInfo: false,
    // team roster
    teamRoster: [],
    fetchingRoster: false,
    // misc
    error: null,
};

export const nbaReducer = (state = initialState, action) => {
    switch (action.type) {
        // team roster
        case FETCH_TEAMROSTER_START:
            return {
                ...state,
                fetchingRoster: true,
                error: null,
            };
        case FETCH_TEAMROSTER_SUCCESS:
            return {
                ...state,
                fetchingRoster: false,
                error: null,
                teamRoster: action.payload,

            };
        case FETCH_TEAMROSTER_FAILURE:
            return {
                ...state,
                fetchingRoster: false,
                error: action.payload
            };


        // team common info
        case FETCH_NBA_TEAM_INFO_START:
            return {
                ...state,
                fetchigTeamInfo: true,
                error: null,
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
