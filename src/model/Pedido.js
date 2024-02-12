const knex = require('../config/conexao');

class Pedido {
    _bebida
    _novoPedido

    constructor(bebida) {
        this._bebida = bebida
    }

    emitir() {
        this._novoPedido = {
            bebida: this._bebida._bebida,
            tamanho: `${this._bebida._tamanho} ml`,
            copo: this._bebida._tipoCopo,
            gelo: `${this._bebida._quantidadeGelo} cubos de gelo`,
            entrega: this._bebida._entrega,
            tampa: `Tampa ${this._bebida._tampaComFuro} furo`
        };
        return knex('pedidos').insert(this._novoPedido).returning('*')
    }
}

module.exports = Pedido;