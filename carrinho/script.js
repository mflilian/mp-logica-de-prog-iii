// Vamos criar um array de produtos. Cada produto vai ter:
// id, nome, preço e se tem ou não estoque
const produtos = [];
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
  // Usamos o for para passar por cada produto do array
  for (let i = 0; i < produtos.length; i++) {
    // se lê: "para cada item no array produtos, enquanto i for menor que o tamanho do array, faça."

    const produto = produtos[i];
    // se lê: "pegamos o produto que está na posição i."

    // Criamos uma nova div para representar o produto
    const div = document.createElement("div");
    div.className = "produto"; // adiciona a classe para estilizar
    // se lê: "crio uma div, dou a ela a classe produto."

    // Criamos o título com o nome do produto
    const titulo = document.createElement("h3");
    titulo.textContent = produto.nome;
    // se lê: "crio um h3 e coloco o nome do produto como texto."

    // Criamos o parágrafo com o preço
    const preco = document.createElement("p");
    preco.textContent = "R$ " + produto.preco;
    // se lê: "crio um p e coloco o preço do produto."

    // Criamos o botão para adicionar ou mostrar indisponível
    const botao = document.createElement("button");
    // se lê: "crio um botão."

    // Verificamos se o produto está em estoque
    if (produto) {
      botao.textContent = "Adicionar";
      botao.disabled = false; // botão ativado
      // se lê: "se o produto estiver em estoque, o texto do botão vai ser 'Adicionar' e o botão fica ativado."
    } else {
      botao.textContent = "Indisponível";
      botao.disabled = true; // botão desativado
      // se lê: "se não tiver em estoque, o texto vai ser 'Indisponível' e o botão fica desativado."
    }

    // Quando clicar no botão, vai chamar a função para adicionar no carrinho
    botao.addEventListener("click", function () {
      adicionarAoCarrinho();
    });
    // se lê: "quando clicar no botão, chama a função adicionarAoCarrinho, passando o id do produto."

    // Colocamos o título, o preço e o botão dentro da div
    div.appendChild(titulo);
    div.appendChild(preco);
    div.appendChild(botao);
    // se lê: "coloco o título, o preço e o botão dentro da div."

    // Adicionamos essa div na div principal de produtos
    produtosDiv.appendChild(div);
    // se lê: "coloco essa div completa dentro do espaço onde aparecem os produtos."
  }
}

// Função para adicionar um produto no carrinho
function adicionarAoCarrinho(id) {
  // Procuramos o produto que tem o id igual ao clicado
  // Vamos usar find para achar o produto no array de produtos
  // se lê: "procuro no array produtos o produto que tenha id igual ao que recebi."

  // Verificamos se ele está em estoque
    // se lê: "se o produto estiver em estoque, faço o próximo passo."

    // Se tiver, colocamos no carrinho (push) e atualizamos a tela
    // se lê: "adiciono o produto no carrinho e atualizo a lista do carrinho."

    // Se não tiver, mostramos um alerta dizendo que não tem estoque
    // se lê: "se não tiver em estoque, mostro alerta dizendo 'Produto indisponível!'."
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
