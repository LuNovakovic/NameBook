const express = require('express');
const connectDB = require('./config/db');


const app = express();
app.use(express.json());

// Connect Database
connectDB();

app.get('/', (req, res) => 
res.json({ msg: 'Welcome to NameBook API...' })
);

// Define Routes
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

