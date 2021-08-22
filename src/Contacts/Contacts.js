import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts-actions';
import './Contacts.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, showContacts, onDeleteContact }) => {
    return contacts && (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className="contacts__item">
                    <p className="contacts__text">{name}: {number}</p>
                    <button onClick={() => onDeleteContact(id)}>delete</button>
                </li>
            ))}
        </ul>
    )
    
};

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    showContacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts,
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),        
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);