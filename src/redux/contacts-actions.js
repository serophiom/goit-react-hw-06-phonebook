import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContacts = (name, number) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name,
        number
    }
});

export default { addContacts };