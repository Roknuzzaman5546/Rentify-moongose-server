const express = require('express');
const cors = require('cors');

const applyMiddlware = (app) => {
    app.use(cors())
    app.use(express.json())
}

module.exports = applyMiddlware