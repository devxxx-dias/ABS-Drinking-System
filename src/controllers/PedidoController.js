const Bebida = require("../model/Bebida");
const Pedido = require("../model/Pedido");

const pedido = async (req, res) => {
    let { opcao_Bebida, tamanho, gelo, opcao_Entrega } = req.body

    try {
        const bebida = new Bebida(opcao_Bebida, tamanho, gelo, opcao_Entrega).novaBebida()

        const novoPedido = await new Pedido(bebida).emitir()

        return res.status(201).json(novoPedido);

    } catch (error) {
        if (error.status === 400) { return res.status(400).json({ Mensagem: error.message }) };
        return res.status(500).json({ Mensagem: "Erro interno no servidor" });
    }
};

module.exports = { pedido };