import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { _id, name, lastname, email, phone } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                &nbsp;
                <button className="btn btn-danger btn-sm" onClick={onDelete}><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
