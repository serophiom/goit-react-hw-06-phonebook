import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    }
});

const deleteContact = (contactId) => ({
    types: types.DELETE,
    payload: contactId,
});

const changeFilter = value => ({
    type: types.FILTER,
    payload: value,
})

export default { addContact, deleteContact };