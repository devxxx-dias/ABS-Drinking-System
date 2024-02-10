
const knex = require('../config/conexao');
const fs = require('fs/promises');

const consulta = async (req, res) => {
    const { campo } = req.query
    let tabela;

    try {
        const columnInfo = await knex('pedidos').columnInfo();
        const columnNames = Object.keys(columnInfo);

        if (campo) {
            if (columnNames.includes(campo)) {
                tabela = await knex("pedidos")
                    .select(campo)
                    .count('*')
                    .groupBy(campo);
            }
            else {
                return res.status(400).json(`Verifique se o campo foi preenchido corretamente com os dados da tabela. Escolha um desses campos para realizar a sua consulta: ${columnNames.join(', ')}`)
            }
        }
        else {
            tabela = await knex('pedidos');
        }

        return res.status(200).json(tabela);
    } catch (error) {
        return res.status(500).json({ Mensagem: "Erro interno no servidor" })
    }
}

module.exports = consulta;
