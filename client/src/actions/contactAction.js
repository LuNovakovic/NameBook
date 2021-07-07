import { SET_CONTACTS, CONTACT_ERROR, SET_LOADING, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {

        dispatch({
            type: SET_LOADING,
            payload: true 
        });
        
        const res = await fetch('/api/contacts');
        const data = await res.json();


        dispatch({
            type: SET_CONTACTS,
            payload: data
        });
    
        
    };

     //Add Contact
    export const addContact = contact => async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/contacts', contact, config);

            dispatch({ 
                type: ADD_CONTACT, 
                payload: res.data })
        } catch (err) {
            dispatch({ 
                type: CONTACT_ERROR, 
                payload: err.response.msg 
        });
        }


        
    }

    //Delete Contacts
    export const deleteContact = id => async dispatch => {
        try {
            await axios.delete(`/api/contacts/${id}`);

            dispatch({ 
                type: DELETE_CONTACT, 
                payload: id 
            });
        } catch (err) {
            dispatch({ 
                type: CONTACT_ERROR, 
                payload: err.response.msg 
        });
        }
        
    };

     //Update Contact 
    export const updateContact = contact => async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);

            dispatch({ 
                type: UPDATE_CONTACT, 
                payload: res.data
            });
        } catch (err) {
            dispatch({ 
                type: CONTACT_ERROR, 
                payload: err.response.msg 
        });
        }
        
    };

    //Set Current Contact
    export const setCurrent = contact => dispatch => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    //Clear Current Contact
    export const clearCurrent = () => dispatch => {
        dispatch({ type: CLEAR_CURRENT });
    };
