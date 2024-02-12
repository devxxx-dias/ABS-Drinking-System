const knex = require('../config/conexao');

class Consulta {
    _campo
    _tabela

    constructor(campo) {
        this._campo = campo
    }

    async checarCampoDb() {
        let columnInfo = await knex('pedidos').columnInfo();
        let columnNames = Object.keys(columnInfo);

        if (this._campo) {
            if (columnNames.includes(this._campo)) {
                return this._tabela = await knex("pedidos")
                    .select(this._campo)
                    .count('*')
                    .groupBy(this._campo);
            }
            else {
                throw { status: 400, message: `Verifique se o campo foi preenchido corretamente com os dados da tabela. Escolha um desses campos para realizar a sua consulta: ${columnNames.join(', ')}` }
            }
        }
        else {
            return this._tabela = await knex('pedidos');
        }
    }
}

module.exports = Consulta;



