const knex = require('../config/conexao');
const Consulta = require('../model/Consulta');


const consulta = async (req, res) => {
    const { campo } = req.query

    try {
        let tabela = await new Consulta(campo).checarCampoDb()

        return res.status(200).json(tabela);
    } catch (error) {
        if (error.status === 400) { return res.status(400).json({ Mensagem: error.message }) }
        return res.status(500).json({ Mensagem: "Erro interno no servidor" })
    }

}
module.exports = consulta;
