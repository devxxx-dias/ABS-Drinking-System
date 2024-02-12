const { Router } = require('express')

const validarJoi_Body = require('../middleware/validarJoi');
const checar_Pedido = require('../validation/schemaPedido');
const consulta = require('../controllers/ConsultaController');
const lancarPedido = require('./src/controllers/PedidoController.js');


const router = Router();

router.get('/consulta', consulta)

router.post('/pedido', validarJoi_Body(checar_Pedido), lancarPedido)

module.exports = router;
