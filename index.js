const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
const server = app.listen(PORT, () => {
    console.log(`Server listenning on PORT ${PORT}`)
})

app.use(express.static('public'));