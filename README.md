# ABS-Drinking-System

&nbsp;

<div align="center">
  
![gist -  medium](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/dbc79f64-df69-4cfd-b638-05347abac7b7)
</div>

&nbsp;

Desenvolvimento de um sistema **backend** para oferta de refrigerantes e sucos para um ponto de venda e realização de consultas.

&nbsp;

## Uso do sistema

Abaixo será demonstrado as interfaces de uso de suas **2 funcionalidades** do sistema seguindo as regras de **negócio estabelecidas**.

&nbsp;

# Funcão para emissão de um pedido

Abra o Isomnia e verifque se está no endpoint correto **POST (Novo Pedido)**, e na aba JSON cheque se as variavéis de interface estão escrita como na forma abaixo:

&nbsp;

                                         Figura 1 - Checando as variáveis da interface

![image](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/89f50b1a-e175-4f9c-bd50-00162206a66e)

&nbsp;

Caso positivo siga:
**Opcao_Bebida**: Nesse campo escreva uma das opções de bebidas disponíveis **(“Coca”, “Guaraná”, “Suco de Uva” ou “Suco de Laranja”)**, nesse campo também será definido o **tipo de copo**, sendo de o de papel para os refrigerantes, e de plástico para os sucos. As opções **podem não são case-sensitive**, podem ser escritas em maiúsculas ou minúsculas.

**Tamanho**: Nesse campo só aceita os tamanhos disponíveis de copo, sendo para os refrigerantes **3 opções (300, 500 ou 700ml)** e para os **sucos (300 ou 500ml)**, caso insira alguma entrada fora das opções o sistema gera uma mensagem de erro.

**Gelo**: O campo só aceita as opções escrita **“sim” ou “não”**, onde os **refrigerantes recebem 6 cubos de gelos e os sucos 12 cubos**. Caso negativo, a resposta será “Sem Gelo”. Esse campo também não é case-sensitive.

**Opcao_Entrega**: Assim como o campo gelo, este campo só aceita as opções escrita **“sim” ou “não”**, pois aqui é definido o tipo de **tampa “com” ou “sem” furo, para entrega/viagem a tampa deve ser sem furo, para consumo na loja**, a tampa deve ser com furo. Campo non case-sensitive.

Resultado esperado:
Seguindo o “caminho da felicidade”, onde não há erros , segue o resultado esperado.
O pedido é composto por:

- id (número único onde é possivel realizar uma rastreabilidade).
- Bebida – demonstrando a bebida escolhida.
- Copo – informando o tipo de copo, pré-definido com a escolha da bebida.
- Tamanho – seguindo os padrões do tipo de bebida.
- Gelo – demonstrando as quantidades de acordo com a bebida escolhida.
- Entrega – se a bebida é/ou não para consumo na loja.
- Tampa – demonstra o tipo de tampa de acordo com o consumo na loja ou não.
- Data de criação do pedido – demonstrando a data que foi realizado o pedido.

      &nbsp;

                                           Figura 2 - Resultado esperado – Emissão de pedido

 ![image](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/cf970bb2-6d43-4a9c-b42a-de006ff6d254)

&nbsp;

# Funcionalidade sugerida – Consulta

Seguindo as boas práticas de feedback, fica aqui sugerida e realizada a função consulta, para consultar e acompanhar os pedidos realizados. Esta função tem o foco gerencial do equipamento, onde será possível coletar os dados do pedido e gerar um relatório.

Para realizar uma consulta, abra o Insomnia e verifique se está no endpoint GET – consulta , todas as consultas serão realizadas pelo parâmetro query, observe se clicou no campo Parameters e logo abaixo você observará os campos que serão utilizados. Segue figura:

&nbsp;

                                        Figura 3 – Apresentação da funcionalidade consulta

![image](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/a0921026-b68b-4c2a-bcba-5ed4010327f1)

&nbsp;

Você pode digitar diretamente na caixa de endereço após o _query parameter_ consulta **“?campo=gelo”**, ou utilizar as caixas dos parâmetros queries, no qual o primeiro intem deve ser a palavra **“CAMPO”** conforme o exemplo, pois do contrário será gerado uma falha na aplicação. Ao lado e abaixo do Toggle Description, insira o termo de pesquisa existente no banco de dados. Caso seja inserido ou esquecido um termo de pesquisa a aplicação gerará uma mensagem de erro, demonstrando quais campos devem ser utilizados para realizar a pesquisa.

&nbsp;

                                       Figura 4 – Pesquisa pelo Query Parameters

<div align="center">
  
![image](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/845393b4-4cb9-4739-b3ee-de638c2b6e42)
</div>

&nbsp;
Caso as entradas estiverem devidamente preenchidas o sistema retorna o item descrito e a sua quantidade no COUNT.

&nbsp;

Figura 6 – Consulta com o campo preenchido realizada com sucesso
![image](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/2b4e7b94-e3c1-42d1-8a64-368df9b2542e)

&nbsp;

Caso não seja selecionado **nenhum campo (Query Parameter)**, o sistema retorna todas as entradas do banco de dados.

&nbsp;

                                      Figura 5 – Consulta de todos os dados

![image](https://github.com/devxxx-dias/ABS-Drinking-System/assets/104696883/614e40c8-5d2f-4cb8-8ffd-5c7502bbd7c8)

&nbsp;

> O código possui potencial para inclusção de novas modalidades.
> O intuito principal é demonstrar a realização de um projeto numa situação corriqueira em qualquer rede de fast-food.
> Fique a vontade para me contatar em caso de dúvidas
> <https://github.com/devxxx-dias>
