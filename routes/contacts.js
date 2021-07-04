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
router.put('/:id', (req, res) => {
    res.send('Update contact');
});


//@route DELETE api/contacts/:id
//@desc  Delete contacts
//@access Public
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;
