import { expect } from "chai";
import axios from "axios";
// const axios = require('axios');

const instacia = axios.create({
    baseURL: 'http://localhost:3000'
})




const URL_DEPLOY_PEDIDO = 'https://abs-drinks.cyclic.app/pedido';
const URL_DEPLOY_CONSULTA = 'https://abs-drinks.cyclic.app/consulta'




const INFO_CREATE_PEDIDO = {
    bebida: "Coca",
    tamanho: 500,
    gelo: "sim",
    entrega: "não"

};


describe('1.0 Teste de Requisicao POST para criar um pedido', () => {
    it('1.1 Deve retornar status 201 ao tentar criar um pedido', async () => {
        try {
            const resposta = await instacia.post(URL_DEPLOY_PEDIDO, INFO_CREATE_PEDIDO);
            expect(resposta.status).to.equal(201);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.2 Deve retornar status 400 se o campo bebida não estiver preenchido com um item inexistente no banco de dados', async () => {
        const bebidaComErro = {
            bebida: "Coc@",
            tamanho: 500,
            gelo: "sim",
            entrega: "não"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, bebidaComErro, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.2.1 Deve retornar status 400 se o campo bebida não for preenchido', async () => {
        const bebidaVazia = {
            bebida: "",
            tamanho: 500,
            gelo: "sim",
            entrega: "não"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, bebidaVazia, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.3 Deve retornar status 400 se o campo tamanho for preenchido com uma opção indisponível para bebida selecionada (aceita String)', async () => {
        const tamanhoIncorreto = {
            bebida: "Coca",
            tamanho: -1,
            gelo: "sim",
            entrega: "não"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, tamanhoIncorreto, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });


    it('1.3.1 Deve retornar status 400 se o campo tamanho não for preenchido', async () => {
        const tamanhoVazio = {
            bebida: "Coca",
            tamanho: "",
            gelo: "sim",
            entrega: "não"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, tamanhoVazio, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.4 Deve retornar status 400 se a opção selecionada para o gelo não for apenas "SIM" ou "NÃO" (non sensitive case)', async () => {
        const erroNoGelo = {
            bebida: "Coca",
            tamanho: 500,
            gelo: "si",
            entrega: "não"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, erroNoGelo, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.4.1 Deve retornar status 400 se o campo gelo não for preenchido', async () => {
        const geloVazio = {
            bebida: "Coca",
            tamanho: 500,
            gelo: "",
            entrega: "não"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, geloVazio, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.5 Deve retornar status 400 se a opção selecionada para entrega não for apenas "SIM" ou "NÃO" (non sensitive case)', async () => {
        const erroNaEntrega = {
            bebida: "Coca",
            tamanho: 500,
            gelo: "sim",
            entrega: "talvez"
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, erroNaEntrega, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });

    it('1.5.1 Deve retornar status 400 se o entrega não for preenchido', async () => {
        const entregaVazia = {
            bebida: "Coca",
            tamanho: 500,
            gelo: "não",
            entrega: ""
        };

        try {
            const resposta = await axios.post(URL_DEPLOY_PEDIDO, entregaVazia, {
                validateStatus: (status) => status === 400,
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });
});

describe('2.0 Teste de Requisição GET para Realizar Consulta dos pedidos registrados', () => {

    it('2.1 Deve retornar status 200 ao realizar uma consulta de todos os pedidos, quando a query paramenter "campo" não for "Selecionada"', async () => {

        try {
            const resposta = await axios.get(URL_DEPLOY_CONSULTA);

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.2 Deve retornar status 200 ao realizar uma consulta ao preencher o campo com o "id" do pedido', async () => {
        try {

            const queryParams = {
                campo: 'id'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.3 Deve retornar status 200 ao realizar uma consulta ao preencher o campo com "data_criacao"', async () => {
        try {

            const queryParams = {
                campo: 'data_criacao'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.4 Deve retornar status 200 ao realizar uma consulta ao preencher o campo com "bebida"', async () => {
        try {

            const queryParams = {
                campo: 'bebida'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.5 Deve retornar status 200 ao realizar uma consulta dos tipos de copos ao preencher o campo com "copo"', async () => {
        try {

            const queryParams = {
                campo: 'copo'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.6 Deve retornar status 200 ao realizar uma consulta dos tamanhos dos copos ao preencher o campo com "tamanho"', async () => {
        try {

            const queryParams = {
                campo: 'tamanho'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.7 Deve retornar status 200 ao realizar uma consulta das quantidades de gelo ao preencher o campo com "gelo"', async () => {
        try {

            const queryParams = {
                campo: 'gelo'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.8 Deve retornar status 200 ao realizar uma consulta das entregas dos pedidos ao preencher o campo com "entrega"', async () => {
        try {

            const queryParams = {
                campo: 'entrega'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.9 Deve retornar status 200 ao realizar uma consulta dos tipos de tampa dos copos ao preencher o campo com "tampa"', async () => {
        try {

            const queryParams = {
                campo: 'tampa'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(200);
        } catch (erro) {
            throw erro;
        }
    });

    it('2.10 Deve retornar status 400 quando o campo query parameter estiver selecionado e o campo for preenchido com qualquer valor que não seja da coluna do banco de dados', async () => {
        try {

            const queryParams = {
                campo: 'tipo de saída'
            };

            const resposta = await axios.get(URL_DEPLOY_CONSULTA, {
                params: queryParams
            });

            expect(resposta.status).to.equal(400);
        } catch (erro) {
            throw erro;
        }
    });
});

