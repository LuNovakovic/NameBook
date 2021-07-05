import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
    });

    const { name, lastname, email, phone } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            lastname: '',
            email: '',
            phone: '',
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input
             type="text" 
             placeholder="Name" 
             name="name" 
             value={name} 
             onChange={onChange} 
            />
            <input
             type="text" 
             placeholder="Last name" 
             name="lastname" 
             value={lastname} 
             onChange={onChange} 
            />
            <input
             type="email" 
             placeholder="Email" 
             name="email" 
             value={email} 
             onChange={onChange} 
            />
            <input
             type="text" 
             placeholder="Phone" 
             name="phone" 
             value={phone} 
             onChange={onChange} 
            />
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
            </div>
        </form>
    )
}

export default ContactForm
