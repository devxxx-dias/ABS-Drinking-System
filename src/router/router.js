const { Router } = require('express');
const validarJoi_Body = require('../middleware/validarJoi');
const checar_Pedido = require('../validation/schemaPedido');
const realizarConsulta = require('../controllers/ConsultaController');
const lancarPedido = require('../controllers/pedidoController');

const router = Router();

router.get('/consulta', realizarConsulta)

router.post('/pedido', validarJoi_Body(checar_Pedido), lancarPedido)

module.exports = router;
