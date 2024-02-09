const express = require('express');
const { pedido } = require('../controllers/pedido');
const validarJoi_Body = require('../middleware/validarJoi');
const checar_Pedido = require('../validation/schemaPedido');
const consulta = require('../controllers/relatorio');

const router = express.Router();

router.get('/consulta', consulta)

router.post('/pedido', validarJoi_Body(checar_Pedido), pedido)

module.exports = {
    router
}