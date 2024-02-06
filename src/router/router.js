const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json("Olá estou funcionando de verdade")
})

module.exports = {
    router
}