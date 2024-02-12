const refrigerantes = ["Coca", "Guaraná"];
const sucos = ["Suco de Uva", "Suco de Laranja"];
const bebidas = refrigerantes.concat(sucos).map(bebida => bebida.toLowerCase());



module.exports = {
    refrigerantes,
    sucos,
    bebidas
}