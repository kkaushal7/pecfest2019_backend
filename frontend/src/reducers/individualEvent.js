import {EVENT_ERROR, EVENT_LOADED, EVENT_LOADING} from "../actions/types";

const initialState = {
    eventLoading : false,
    event: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EVENT_LOADING:
            return {
                ...state,
                eventLoading: true
            };
        case EVENT_LOADED:
            return {
                eventLoading: false,
                event: action.payload
            };
        case EVENT_ERROR:
            return {
                ...state,
                eventLoading: false,
                event: null
            };
        default:
            return state;
    }
}