const express = require('express');
const router = express.Router();


const Contact = require('../models/Contact');

//@route GET api/contacts
//@desc  Get all contacts
//@access Public
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route POST api/contacts
//@desc  Add new contact
//@access Public
router.post('/', async (req, res) => {

    const { name, lastname, email, phone } = req.body;

    try {
        const newContact = new Contact({
            name,
            lastname,
            email,
            phone
        });

        const contact = await newContact.save();

        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error ')
    }
});


//@route PUT api/contacts/:id
//@desc  Update contact
//@access Public
router.put('/:id', async (req, res) => {
    const { name, lastname, email, phone } = req.body;

    // Build contact object
    const contactFields = {};
    if(name) contactFields.name = name;
    if(lastname) contactFields.lastname = lastname;
    if(email) contactFields.email = email;
    if(phone) contactFields.phone = phone;

    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contact not found' });

        contact = await Contact.findByIdAndUpdate(req.params.id,
            { $set: contactFields },
            { new: true });

            res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
});


//@route DELETE api/contacts/:id
//@desc  Delete contacts
//@access Public
router.delete('/:id', async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contact not found' });

        await Contact.findByIdAndRemove(req.params.id);

            res.json({ msg: 'Contact removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
});

module.exports = router;
