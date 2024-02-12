const Joi = require('joi');
const { bebidas } = require('../service/bebidasDatabase');

const checar_Pedido = Joi.object({
    opcao_Bebida: Joi.string().lowercase().required().valid(...bebidas).messages({
        'any.only': `Por gentileza escolha uma das nossas opções, ${bebidas.join(', ').toUpperCase()}. Obrigado!`,
        'string.empty': "Por gentiliza, informe uma opção de bebida.",
    }),
    tamanho: Joi.number().positive().required().valid(300, 500, 700).messages({
        'any.only': `Nossos tamanhos disponíves são: Refrigerante(300ml, 500ml ou 700ml), Sucos(300ml ou 500). Obrigado!`,
        'string.empty': "Por gentiliza, informe uma opção de tamanho."
    }),
    gelo: Joi.string().lowercase().required().valid("sim", "não").options({ convert: false }).messages({
        'any.only': `Por gentileza, nos infome se gostaria de adicionar gelo na sua bebida, escolha as opções, SIM ou NÃO. Muito Obrigado.`,
        'string.empty': "Por gentiliza, informe uma opção de tamanho."
    }),
    opcao_Entrega: Joi.string().lowercase().required().valid("sim", "não").messages({
        'any.only': `Por gentileza, nos infome se a bebida é para viagem, escolha uma das opções SIM ou NÃO, para finalizarmos o seu pedido.`,
        'string.empty': "Por gentiliza, informe se a sua bebida é para entrega."
    })
})

module.exports = checar_Pedido;