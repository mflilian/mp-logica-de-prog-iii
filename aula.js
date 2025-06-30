// const perfilAlunasMinas = [
//     {
//     nome: "Amanda Yumi",
//     idade: 15,
//     temDente: true,
//     apelidos: ["a", "mandinha", "amandoca", "mands", "manduxa"] 
//     },
//     {
//     nome: "Thais de Oliveira",
//     idade: 15,
//     temDente: true,
//     apelidos: ["a", "thai", "thaizinha", "tha", "thata"] 
//     },
//     {
//     nome: "Suelen",
//     idade: 15,
//     temDente: true,
//     apelidos: ["a", "su", "susu", "elen", "sue"] 
//     }

// ]


// const carrinho = {
//     pessoaCompradora: "anna karolina",
//     estado: "pe",
//     itensAdicionados: item,
//     dataDeExpiracaoDoCarrinho: "2025-06-25",
//     status: "expirado"
// }

// const item = {
//     sku: "48130",
//     descricao: "essa eh uma descr",
//     quantidade: 3,
//     disponivelEmEstoque: true
// }

//  if (carrinho.item.disponivelEmEstoque == false) {
//     console.log(
//         "enviar uma notificacao avisando pro user que o estoque do produto acabou",
//     )
//  }

// let nomeDaMusica
// let nome_da_musica

// passo 1: criar objeto com as propriedades iniciais

const historicoMusical = {
    nome: "fernanda vitoria",
    idade: 18,
    nomeDaMusica:"ghost",
    nomeDoArtista: "jeff saturno",
    quantidadeDeVezesQueFoiReproduzida: 50,
}

console.log("Passo 1 - Obj Historico Musical:", historicoMusical)

// passo 2: adicionar a nova propriedade "generoMusical"
historicoMusical.generoMusical = "romantica e dramatica";
console.log("Passo 2 - Com genero musical:", historicoMusical)

// passo 3: atualizar o valor de quantidadeDeVezesQueFoiReproduzida
// como se o cliente tivesse ouvido mais uma vez
historicoMusical.quantidadeDeVezesQueFoiReproduzida += 1
console.log("Passo 3: após ouvir a musica mais uma vez:",historicoMusical )