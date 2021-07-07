import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import { clearCurrent, deleteContact, setCurrent } from '../../actions/contactAction';

const ContactItem = ({ contact }) => {
    

    const { _id, name, lastname, email, phone } = contact;

    const onDelete = () => {
        store.dispatch(deleteContact(_id));
        store.dispatch(clearCurrent());
    }

    const onEdit = () => {
        store.dispatch(setCurrent(contact))
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <button className="btn btn-dark btn-sm" onClick={onEdit}>Edit</button>
                &nbsp;
                <button className="btn btn-danger btn-sm" onClick={onDelete}><i className="fas fa-trash"></i></button>
            </td>
        </tr>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
