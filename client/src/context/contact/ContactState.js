import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';
import contactContext from './contactContext';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill',
                lastname: 'Johnson',
                email: 'jill@gmail.com',
                phone: '9484648438'
            },
            {
                id: 2,
                name: 'Bill',
                lastname: 'Bohnson',
                email: 'Bill@gmail.com',
                phone: '9484648438'
            },
            {
                id: 3,
                name: 'Gill',
                lastname: 'Gohnson',
                email: 'Gill@gmail.com',
                phone: '9484648438'
            },
            {
                id: 4,
                name: 'Pill',
                lastname: 'Pohnson',
                email: 'pill@gmail.com',
                phone: '9484648438'
            },
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    //Delete Contacts

    //Set Current Contact

    //Clear Current Contact

    //Update Contact 

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact
        }}>
            
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;

