import { SET_CONTACTS, CONTACT_ERROR, SET_LOADING} from './types';

export const getContacts = () => async dispatch => {
    try {
        dispatch({
            type: SET_LOADING,
            payload: true 
        });
        
        const res = await fetch('/contacts');
        const data = await res.json();


        dispatch({
            type: SET_CONTACTS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            payload: err.response.data
        });
    }
        
    };
