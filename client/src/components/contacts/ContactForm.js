import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
            name: '',
            lastname: '',
            email: '',
            phone: '',
           });
            
        }
    }, [contactContext, current]);

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
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
     
    };

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">
                {current ? 'Edit Contact' : 'Add Contact'}</h2>
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
                <input type="submit" value= {current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
            </div>
    {current && (
        <div>
            <button className='btn btn-light btn-block' onClick={clearAll}>
                Clear
            </button>
        </div>
    )}
        </form>
    )
}

export default ContactForm
