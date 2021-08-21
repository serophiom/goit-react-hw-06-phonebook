import React, { useState } from 'react';
import './FormAddContacts.css';

export default function FormAddContacts({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(name, number);
        reset();
    };

    const reset = () => {
       setName('');
       setNumber('');
    };

        return (
            <form onSubmit={handleSubmit}>
              <div className="input-form">
                <label>
                    Name<input
                    className="add-input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleChange}
                /> 
                </label>
                <label>
                    Number<input
                    className="add-input"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                    />
                </label>

                <button className="btn-add" type="submit">Add contact</button>
            </div>  
            </form>
        );
};