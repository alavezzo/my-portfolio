const express = require('express');
const routes = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
