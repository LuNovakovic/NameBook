import { SET_CONTACTS, CONTACT_ERROR, SET_LOADING, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT } from '../actions/types';

const initialState = {
    contacts: null,
    current: null,
    loading: false,
    error: null
}



export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
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
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact._id === action.payload._id ? action.payload : contact
                ),
                loading: false

            }
        default:
            return state;
    }
}