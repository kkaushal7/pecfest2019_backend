import axios from 'axios';
import {returnErrors} from "./messages";

import {EVENT_LOADED, EVENTS_LOADING, EVENT_ERROR} from "./types";

export const loadEvent = (eventId) => (dispatch, getState) => {
    dispatch({type: EVENTS_LOADING});
    axios.get(`api/events/${eventId}`)
        .then(res => {
            dispatch({
                type: EVENT_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: EVENT_ERROR
            });
        })
};