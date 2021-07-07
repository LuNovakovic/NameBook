import { SET_CONTACTS, CONTACT_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
    contacts: null,
    current: null,
    loading: false,
    error: null
}



export default function contactReducer (state = initialState, action) {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case CONTACT_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default: 
        return state;
    }
}