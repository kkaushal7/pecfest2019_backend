import {EVENTS_LOADING, EVENTS_LOADED, EVENTS_ERROR} from "../actions/types";

const initialState = {
    events: [],
    isLoadingEvents: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EVENTS_LOADING:
            return {
                ...state,
                isLoadingEvents: true
            };
        case EVENTS_LOADED:
            return {
                ...state,
                isLoadingEvents: false,
                events: action.payload
            };
        case EVENTS_ERROR:
            return {
                ...state,
                events: [],
                isLoadingEvents: false
            };
        default:
            return state;

    }
}