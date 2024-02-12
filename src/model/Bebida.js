const { refrigerantes, sucos } = require('../service/bebidasDatabase');

class Bebida {
    _bebida
    _tamanho
    _gelo
    _entrega
    _tipoCopo
    _tampaComFuro
    _quantidadeGelo

    constructor(bebida, tamanho, gelo, entrega) {
        this._bebida = bebida;
        this._tamanho = tamanho;
        this._gelo = gelo;
        this._entrega = entrega;
        this._quantidadeGelo = "Sem";
        this._tampaComFuro = "com";
    }
    opcaoGelo() {
        if (this._gelo === "sim") { this._gelo = true }
    }

    configurarEntrega() {
        if (this._entrega === "sim") {
            this._tampaComFuro = "sem"
            this._entrega = "Take out"
        }

        if (this._entrega === "não") {
            this._entrega = "Eat in";
        }
    }
    tipoBebida() {
        if (refrigerantes.some(intem => intem.toLowerCase() === this._bebida.toLowerCase())) {
            this._tipoCopo = "Copo de Papel";
            if (this._gelo) { this._quantidadeGelo = 6; }

        } else if (sucos.some(item => item.toLowerCase() === this._bebida.toLowerCase()) && [300, 500].includes(this._tamanho)) {
            this._tipoCopo = "Copo de Plástico";
            if (this._gelo === true) { this._quantidadeGelo = 12; }
        } else {
            throw { status: 400, message: "Para os sucos nossos tamanhos disponíveis são 300ml (pequeno) e 500ml (médio)." };
        }
    }
    novaBebida() {
        this.opcaoGelo();
        this.configurarEntrega();
        this.tipoBebida();
        return this
    }
}

module.exports = Bebida;

