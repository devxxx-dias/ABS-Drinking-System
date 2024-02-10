const knex = require('../config/conexao');
const { refrigerantes, sucos } = require('../bebidasBancoDeDados');
const pedido = async (req, res) => {
    let { bebida, tamanho, gelo, entrega } = req.body

    let copoPapel = false;
    let tampa_Com_Furo = false;
    let quantidadeGelo = 0;

    try {
        gelo === "sim" ? gelo = true : gelo = false;
        entrega === "sim" ? tampa_Com_Furo = false : tampa_Com_Furo = true;

        if (refrigerantes.some(intem => intem.toLowerCase() === bebida.toLowerCase())) {
            copoPapel = true;
            if (gelo) { quantidadeGelo = 6; }
        }
        else if (sucos.some(intem => intem.toLowerCase() === bebida.toLowerCase())) {
            copoPapel = false;
            if (![300, 500].includes(tamanho)) {
                return res.status(400).json("Para os sucos nossos tamanhos disponives são 300ml (pequeno) e 500ml(médio).")
            }

            if (gelo) {
                quantidadeGelo = 12;
            }
        }

        const pedido = {
            bebida,
            tamanho: tamanho += " ml",
            copo: copoPapel ? "Copo de Papel" : "Copo de Plastico",
            gelo: gelo ? `${quantidadeGelo} cubos de gelo` : "sem gelo",
            entrega: entrega ? "Não" : "Sim",
            tampa: tampa_Com_Furo ? "Tampa com furo" : "Tampa sem furo",
        }

        const pedidoRealizado = await knex('pedidos').insert(pedido).returning('*');
        return res.status(201).json(pedidoRealizado);

    } catch (error) {

        return res.status(500).json({ error });
    }
};

module.exports = {
    pedido
}









