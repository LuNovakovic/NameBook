import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import store from '../../store';
import { addContact, clearCurrent, updateContact } from '../../actions/contactAction';

const ContactForm = () => {
    const current = useSelector(state => state.contact.current)

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
    }, [current]);

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
            store.dispatch(addContact(contact));
        } else {
            store.dispatch(updateContact(contact));
        }
        clearAll();
     
    };

    const clearAll = () => {
        store.dispatch(clearCurrent());
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">
                {current ? 'Edit Contact' : 'Add Contact'}</h2>
            <div className="mb-3">
            <input className="form-control"
             type="text" 
             placeholder="Name" 
             name="name" 
             value={name} 
             onChange={onChange} 
            />
            </div>
                <div className="mb-3">
            <input className="form-control"
             type="text" 
             placeholder="Last name" 
             name="lastname" 
             value={lastname} 
             onChange={onChange} 
            />
            </div>
    <div className="mb-3">
            <input className="form-control"
             type="email" 
             placeholder="Email" 
             name="email" 
             value={email} 
             onChange={onChange} 
            />
            </div>
    <div className="mb-3">
            <input className="form-control"
             type="text" 
             placeholder="Phone" 
             name="phone" 
             value={phone} 
             onChange={onChange} 
            />
            </div>
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
