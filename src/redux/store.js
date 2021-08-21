import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts-reducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    // filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;