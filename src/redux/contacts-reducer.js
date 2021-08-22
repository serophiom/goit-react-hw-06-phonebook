import { combineReducers } from "redux";
import types from './contacts-types';

const contacts = (state = [], {type, payload}) => {
    switch(type) {
        case types.ADD:
            return [...state, payload];

        case types.DELETE:
            return state.filter(contact => contact.id !== payload);

        default:
            return state;
    }
}
    
const filter = (state = '', { type, payload }) => {
    switch(type) {
        case types.FILTER:
            return payload;

        default:
            return state;
    }
}

export default combineReducers({
    contacts,
    filter
});