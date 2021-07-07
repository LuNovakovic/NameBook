import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import ContactItem from './ContactItem';
import {Spinner} from '../layout/Spinner';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactAction';
import store from '../../store';

const Contacts = () => {
   const contacts = useSelector(state => state.contact.contacts)
   const loading = useSelector(state => state.contact.loading)

    useEffect(() => {
        store.dispatch (getContacts());
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


Contacts.propTypes = {
    contact: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    contact: state.contact
});



export default connect(mapStateToProps, { getContacts })(Contacts);
