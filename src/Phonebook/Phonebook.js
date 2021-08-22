import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import './Phonebook.css';

function Phonebook() {
    const contacts = useSelector(state => state.contacts.items);

    // useEffect (() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    return (
        <div className="phonebook">
            <h1>Phonebook</h1>
            <FormAddContacts />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
        </div>
    );
}

export default Phonebook;