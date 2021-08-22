import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from './contacts-reducer';

const store = configureStore({
    reducer: {
      contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
  
  export default store;


// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts-reducer';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;