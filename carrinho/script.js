// Vamos criar um array de produtos. Cada produto vai ter:
// id, nome, preço e se tem ou não estoque
const produtos = [
  {
    id: 1,
    nome: "sainha da cyclone",
    preco: 30.50,
    temEstoque: true,
  },
  {
    id: 2,
    nome: "sombrinha de frevo",
    preco: 100.03,
    temEstoque: true,
  },
  {
    id: 3,
    nome: "sombrinha de frevo",
    preco: 13.13,
    temEstoque: false,
  },
  {
    id: 4,
    nome: "capinha de celular",
    preco: 10.9,
    temEstoque: false,
  },
];
// se lê: "crio uma lista chamada produtos, que vai guardar vários objetos com informações do produto."

// Criamos uma lista chamada 'carrinho', que começa vazia.
// Aqui vamos guardar os produtos que a pessoa escolher.
let carrinho = [];

// Pegamos os elementos do HTML para mexer na tela
const produtosDiv = document.getElementById("produtos"); // onde vão aparecer os produtos
const carrinhoUl = document.getElementById("carrinho"); // onde vamos mostrar o carrinho
const finalizarBtn = document.getElementById("finalizar"); // botão para finalizar a compra
// se lê: "pegamos do HTML os espaços onde vamos colocar os produtos, o carrinho, e o botão finalizar."

// Função para mostrar os produtos na tela
function mostrarProdutos() {
  produtos.forEach((produto) => {
    // "Se lê: 'Para cada item do array produtos, execute essa função. O parâmetro produto representa cada produto da lista.'"

    const div = document.createElement("div");
    div.className = "produto";
    // "Se lê: 'Crio uma div e dou a ela a classe produto.'"

    const titulo = document.createElement("h3");
    titulo.textContent = produto.nome;
    // "Se lê: 'Crio um h3 e coloco o nome do produto como texto.'"

    const preco = document.createElement("p");
    preco.textContent = "R$ " + produto.preco;
    // "Se lê: 'Crio um parágrafo p e coloco o preço do produto.'"

    const botao = document.createElement("button");
    // "Se lê: 'Crio um botão.'"

    if (produto.temEstoque === true) {
      botao.textContent = "Adicionar";
      botao.disabled = false;
      // "Se lê: 'Se o produto estiver em estoque, o texto do botão vai ser Adicionar e o botão fica ativado.'"
    } else {
      botao.textContent = "Indisponível";
      botao.disabled = false;
      // "Se lê: 'Se não estiver em estoque, o texto vai ser Indisponível e o botão fica desativado.'"
    }

    botao.addEventListener("click", function () {
      adicionarAoCarrinho(produto.id);
    });

    div.appendChild(titulo);
    div.appendChild(preco);
    div.appendChild(botao);

    produtosDiv.appendChild(div);
  });
}

// Função para adicionar um produto no carrinho
function adicionarAoCarrinho(id) {
  // Procuramos o produto que tem o id igual ao clicado
  // Vamos usar find para achar o produto no array de produtos
  const produto = produtos.find((produto) => {
    return produto.id === id
  })
  // se le: procuro no array de produtos o item que tem o id igual ao que foi clicado 

  // Verificamos se ele está em estoque
  // Se tiver, colocamos no carrinho (push) e atualizamos a tela
  // Se não tiver, mostramos um alerta dizendo que não tem estoque
  if (produto.temEstoque === true) {
    carrinho.push(produto)
    console.log("adicionado", produto)
  } else {
    alert("Produto indisponível")
  }
}

// Função para atualizar a lista do carrinho na tela
function atualizarCarrinho() {
  // Primeiro, limpamos o conteúdo atual da lista
  carrinhoUl.innerHTML = "";
  // se lê: "limpo o conteúdo atual do carrinho."

  // Passamos por cada item do carrinho
  // se lê: "para cada produto no carrinho, faço os passos abaixo."

  // Criamos um <li> para cada produto, mostrando nome e preço
  // se lê: "crio um item de lista (li) e escrevo o nome e o preço do produto."

  // Colocamos esse <li> na lista
  // se lê: "coloco o li dentro do carrinho na tela."
}

// Função para finalizar a compra
function finalizarCompra() {
  // Criamos uma variável para somar o valor total
  // se lê: "crio uma variável chamada total e começo com zero."

  // Passamos por cada produto no carrinho e somamos os preços
  // se lê: "para cada produto no carrinho, somo o preço no total."

  // Perguntamos se a pessoa quer usar cupom
  // se lê: "pergunto para a pessoa se ela quer usar um cupom."

  // Se for BRINDE, mostramos uma mensagem de brinde
  // se lê: "se a pessoa digitar BRINDE, mostro uma mensagem dizendo que ganhou um brinde."

  // Se for DESCONTO10, aplicamos 10% de desconto
  // se lê: "se digitar DESCONTO10, aplico 10% de desconto no total."

  // Se não for nenhum, avisamos que não tem cupom válido
  // se lê: "se não for nenhum desses, aviso que não tem cupom válido."

  // Mostramos o valor total final para a pessoa
  // se lê: "mostro para a pessoa o valor final da compra."

  // Limpamos o carrinho
  carrinho = [];
  // se lê: "depois de finalizar, deixo o carrinho vazio."

  // Atualizamos a tela para mostrar carrinho vazio
  atualizarCarrinho();
  // se lê: "atualizo a tela para mostrar que o carrinho está vazio."
}

// Quando clicar no botão "Finalizar Compra", chamamos a função finalizarCompra
finalizarBtn.addEventListener("click", finalizarCompra);
// se lê: "quando clicar no botão finalizar, vai rodar a função finalizarCompra pois estamos passando ela nos parametros."

// Quando a página abrir, mostramos os produtos na tela
mostrarProdutos();
// se
// se lê: "quando a página carrega, já mostro os produtos na tela."
