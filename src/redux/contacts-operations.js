import axios from 'axios';
// import * as contactsAPI from './contacts-api';
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
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
  
    try {
      const { data } = await axios.get('http://localhost:7777/contacts');
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error));
    }
  };
  
  export const addContact = (name, number) => async dispatch => {
    const contact = {
      name,
      number,
    };
  
    dispatch(addContactRequest());
  
    try {
      const { data } = await axios.post('http://localhost:7777/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };
  
  export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
  
    axios
      .delete(`contacts/${contactId}`)
      .then(() => dispatch(deleteContactSuccess(contactId)))
      .catch(error => dispatch(deleteContactError(error)));
  };

