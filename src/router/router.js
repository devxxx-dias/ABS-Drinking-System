const express = require('express');
const { pedido } = require('../controllers/pedido');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json("Olá estou funcionando de verdade mesmo")

})

router.post('/pedido', pedido)

module.exports = {
    router
}