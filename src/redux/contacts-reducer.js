import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  });
  
  const isLoading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
  
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
  
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
  });
  
  const error = createReducer(null, {
    [fetchContactsError]: (_, action) => action.payload,
    [fetchContactsRequest]: () => null,
  
    [addContactError]: (_, action) => action.payload,
    [addContactRequest]: () => null,
  
    [deleteContactError]: (_, action) => action.payload,
    [deleteContactRequest]: () => null,
  });
  
  const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
  });
  
  export default combineReducers({
    items,
    isLoading,
    error,
    filter,
  });







// const itemReducer = createReducer([], {
//     [addContact]: (state, action) => [...state, action.payload],
//     [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
// });

// const filterReducer = createReducer('', {
//     [changeFilter]: (_, action) => action.payload,
// });

// export default combineReducers({
//     items: itemReducer,
//     filter: filterReducer,
// });