import { createStore } from 'redux';

const contacts = [];

const reducer = (state = contacts, action) => {
    return state;
};

const store = createStore(reducer);

export default store;