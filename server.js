const express = require('express');

const app = express();

// Define Routes
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res) => res.json({ msg: 'Welcome to NameBook API...'}));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

