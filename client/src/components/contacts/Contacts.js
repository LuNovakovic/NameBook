import React, { Fragment, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);
    
    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
    }

    if (contacts === null || loading) {
        return <Spinner />;
    }
    
    return (
        <table className="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>
                        <i className="fas fa-envelope-open"></i>&nbsp;
                        E-mail
                    </th>
                    <th>
                        <i className="fas fa-phone"></i>&nbsp;
                        Broj telefona
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => <ContactItem key={contact._id} contact={contact} />)}
            </tbody>
        </table>
    )

}

export default Contacts
