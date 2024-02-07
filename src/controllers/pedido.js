const refrigerantes = ["Coca", "Guaraná"];
const sucos = ["Suco de Uva", "Suco de Laranja"];

const pedido = async (req, res) => {
    let { bebida, tamanho, gelo, viagem } = req.body

    let copoPapel = false;
    let copoPlastico = false;
    let tampaComFuro = false;
    let quantidadeGelo = 0

    try {

        if (refrigerantes.some(intem => intem.toLowerCase() === bebida.toLowerCase())) {
            copoPapel = true;

            if (![300, 500, 700].includes(tamanho)) {
                return res.status(400).json("Nossos tamanhos disponives são 300 (pequeno), 500(médio) ou 700 (grande).")
            }

            if (gelo) {
                quantidadeGelo = 6;
            }

            if (viagem) {
                tampaComFuro = true;
            }
        }
        else if (sucos.some(intem => intem.toLowerCase() === bebida.toLowerCase())) {
            copoPlastico = true;
            if (![300, 500].includes(tamanho)) {
                return res.status(400).json("Nossos tamanhos disponives são 300 (pequeno) e 500(médio).")
            }

            if (gelo) {
                quantidadeGelo = 12;
            }

            if (viagem) {
                tampaComFuro = true;
            }
        }
        else {
            const bebidas = refrigerantes.concat(sucos);
            return res.status(400).json(`Nossas opções de bebidas são ${bebidas.join(', ')}.`)
        }

        const pedido = {
            bebida,
            tamanho: tamanho += " ml",
            copo: copoPapel ? "Copo de Papel" : copoPlastico ? "Copo de Plastico" : "",
            gelo: gelo ? "com gelo" : "sem gelo",
            viagem: viagem ? "Sim" : "Não",
            tampaComFuro: tampaComFuro ? "Sim" : "Não",
        }

        return res.status(201).json(pedido);

    } catch (error) {
        return res.status(500).json({ Mensagem: "Erro interno no servidor" })
    }
}
module.exports = {
    pedido
}









