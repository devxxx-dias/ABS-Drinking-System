const { Router } = require('express');
const validarJoi_Body = require('../middleware/validarJoi');
const checar_Pedido = require('../validation/schemaPedido');
const realizarConsulta = require('../controllers/ConsultaController.js');
const lancarPedido = require('../controllers/PedidoController.js');

const router = Router();

router.get('/consulta', realizarConsulta)

router.post('/pedido', validarJoi_Body(checar_Pedido), lancarPedido)

module.exports = router;
