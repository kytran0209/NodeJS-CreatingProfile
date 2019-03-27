const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

const users = require('./routes/api/users');
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// User Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server running on port ${port}`));

