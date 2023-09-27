document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Logica de cadastro de cliente 

        
        // Limpar o formulário
        cadastroForm.reset();
        
    });
});

function realizarCadastro() {
    const secCadastro = document.querySelector('.cadastro');

    const cadastroForm = document.getElementById("cadastroForm");
    let span = document.getElementById('nome-usuario');

    // RECUPERANDO TODOS OS VALORES
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha-2").value;

    const text = `Hello, ${nome}!`
    span.textContent = text;

    cadastroForm.reset();
    secCadastro.style.display = "none";

     // Após o cadastro bem-sucedido, exibir o "box" de cadastro realizado
     const cadastroRealizadoBox = document.getElementById("cadastroRealizadoBox");
     cadastroRealizadoBox.textContent = "Cadastro realizado com sucesso!";
     cadastroRealizadoBox.style.display = "block"; // Mostrar o "box"
 }
   



// Login

function realizarLogin(){
    
    const secCadastro = document.querySelector('.cadastro'); // Use querySelector para selecionar o primeiro elemento com a classe "cadastro"
    const loginForm = document.getElementById("loginForm");
    const nome = document.getElementById("nome-login").value;
    let span = document.getElementById('nome-usuario');


    const text = `Hello, ${nome}!`
        // Atribui o texto ao elemento <span>
        span.textContent = text;

        loginForm.reset();
        secCadastro.style.display = "none";

}


// PRODUTOS 

// script.js
const produtos = [
    {
        nome: "",
        imagem: "",
        preco: 0,
    },
    {
        nome: "",
        imagem: "",
        preco: 0,
    },
    {
        nome: "",
        imagem: "",
        preco: 0,
    },
];

const produtosContainer = document.querySelector(".produtos");

produtos.forEach((produto) => {
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto");

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;

    const nome = document.createElement("h2");
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    produtoDiv.appendChild(imagem);
    produtoDiv.appendChild(nome);
    produtoDiv.appendChild(preco);

});

// Referencie o botão e a mensagem de confirmação
const addButton = document.querySelectorAll('.animated-button');
const confirmationMessage = document.getElementById('confirmationMessage');
const ps5ButtonAdd = document.getElementById('btn-add-ps5');

// Variável para armazenar os produtos no carrinho
const carrinho = [];

let contadorProdutos = 0;

// Função para atualizar o contador
function atualizarContador() {
    const contadorElement = document.getElementById("contador-compras");
    contadorElement.textContent = contadorProdutos;
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto) {
    contadorProdutos++;
    atualizarContador();

    confirmationMessage.style.display = "block";

    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 3000);

    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaDeProdutos = document.querySelector('.lista-de-produtos');
    const totalCarrinho = document.querySelector('.total-carrinho');

    // Limpa a lista de produtos no carrinho
    listaDeProdutos.innerHTML = '';

    // Calcula o total do carrinho
    let total = 0;

    // Itera sobre os produtos no carrinho
    for (const produto of carrinho) {
        const li = document.createElement('li');

        // Crie elementos para exibir os detalhes do produto
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;

        const infoProduto = document.createElement('div');
        infoProduto.classList.add('info-produto');

        const h3 = document.createElement('h3');
        h3.textContent = produto.nome;

        const pDescricao = document.createElement('p');
        pDescricao.textContent = produto.descricao;

        const pPreco = document.createElement('p');
        pPreco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        // Botão para remover o produto do carrinho
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remove';
        btnRemover.classList.add('remover-produto');
        btnRemover.addEventListener('click', () => removerDoCarrinho(produto));

        // Adiciona elementos à lista
        infoProduto.appendChild(h3);
        infoProduto.appendChild(pDescricao);
        infoProduto.appendChild(pPreco);

        li.appendChild(img);
        li.appendChild(infoProduto);
        li.appendChild(btnRemover);

        listaDeProdutos.appendChild(li);

        // Atualiza o total do carrinho
        total += produto.preco;
    }
    // Exibe o total do carrinho
    totalCarrinho.textContent = `You will pay: R$ ${total.toFixed(2)}`;
}

// Função para remover um produto do carrinho
function removerDoCarrinho(produto) {
    const indice = carrinho.indexOf(produto);
    if (indice !== -1) {
        carrinho.splice(indice, 1);
        atualizarCarrinho();
        contadorProdutos--;
        atualizarContador();
    }
}


// FILTRO DE PESQUISA
function filtrarProdutos() {
    const sectionCadastro = document.querySelector('.cadastro');

    sectionCadastro.style.display = "none";

    var input, filter, produtos, produto, nome, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    produtos = document.querySelectorAll(".produto");

    for (i = 0; i < produtos.length; i++) {
        produto = produtos[i];
        nome = produto.getElementsByTagName("h2")[0];

        if (nome.innerText.toUpperCase().indexOf(filter) > -1) {
            produto.style.display = "";
        } else {
            produto.style.display = "none";
        }
    }
}

//FUNCOES PARA ADICIONAR AO CARRINHO 
function adicionarCart(){
    adicionarAoCarrinho(ps5);
}
function adicionarCart2(){
    adicionarAoCarrinho(xbox);
}
function adicionarCart3(){
    adicionarAoCarrinho(hunsts);
}
function adicionarCart4(){
    adicionarAoCarrinho(iphone13);
}
function adicionarCart5(){
    adicionarAoCarrinho(iphone14Pro);
}
function adicionarCart6(){
    adicionarAoCarrinho(noteDell);
}
function adicionarCart7(){
    adicionarAoCarrinho(headsetLo);
}
function adicionarCart8(){
    adicionarAoCarrinho(mouseHyper);
}
function adicionarCart9(){
    adicionarAoCarrinho(macbook);
}
function adicionarCart10(){
    adicionarAoCarrinho(ps4Controller);
}
function adicionarCart11(){
    adicionarAoCarrinho(airpodsPro);
}
function adicionarCart12(){
    adicionarAoCarrinho(casiso);
}
function adicionarCart14(){
    adicionarAoCarrinho(S21);
}
function adicionarCart13(){
    adicionarAoCarrinho(nintendo);
}
function adicionarCart15(){
    adicionarAoCarrinho(ps5Controller);
}

//OBJETOS DE PRODUTOS
const ps5 = {
    nome: 'PlayStation 5',
    descricao: 'PlayStation 5',
    preco: 3800.99,
    imagem: '/e-commerce(DevWEB)/IMG/ps5.jpg',
};

const xbox = {
    nome: 'Xbox One S',
    descricao: 'Xbox One S',
    preco: 3100.99,
    imagem: '/e-commerce(DevWEB)/IMG/Xbox.jpg',
};

const iphone13 = {
    nome: 'Iphone 13 128gb',
    descricao: 'Iphone 13 128gb',
    preco: 4500.99,
    imagem: '/e-commerce(DevWEB)/IMG/Iphone 13.jpg',
};

const hunsts = {
    nome: 'Hunstsman Mini',
    descricao: 'Razer Hunstsman Mini',
    preco: 450.99,
    imagem: '/e-commerce(DevWEB)/IMG/Teclado razer.jpg',
};

const iphone14Pro = {
    nome: 'Iphone 14 pro 256gb',
    descricao: 'Iphone 14 pro 256gb',
    preco: 5800,
    imagem: '/e-commerce(DevWEB)/IMG/Iphone14.jpg',
};

const noteDell = {
    nome: 'Notebook Dell',
    descricao: 'Notebook Dell inspiron 15',
    preco: 2650.99,
    imagem: '/e-commerce(DevWEB)/IMG/notebookDell.jpg',
};

const headsetLo = {
    nome: 'Headset logitech',
    descricao: 'Headset logitech',
    preco: 560.99,
    imagem: '/e-commerce(DevWEB)/IMG/Headset logitech.jpg',
};

const mouseHyper = {
    nome: 'Mouse Hyperx',
    descricao: 'New Mouse Hyperx',
    preco: 270.99,
    imagem: '/e-commerce(DevWEB)/IMG/mouse Hyperx.jpg',
};
const macbook = {
    nome: 'Macbook',
    descricao: 'Macbook Air',
    preco: 6100.90,
    imagem: '/e-commerce(DevWEB)/IMG/macbook.jpg',
};

const ps4Controller = {
    nome: 'PS4 Controller',
    descricao: 'PS4 Controller',
    preco: 280.99,
    imagem: '/e-commerce(DevWEB)/IMG/controlePs4.jpg',
};

const casiso = {
    nome: 'Casio Watch',
    descricao: 'Casio Watch',
    preco: 290.99,
    imagem: '/e-commerce(DevWEB)/IMG/relogioCasio.jpg',
};

const nintendo = {
    nome: 'Nintendo Switch',
    descricao: 'Nintendo Switch',
    preco: 2950.99,
    imagem: '/e-commerce(DevWEB)/IMG/NinSwitch.jpg',
};
const airpodsPro = {
    nome: 'AirPods Pro',
    descricao: 'AirPods Pro',
    preco: 800.99,
    imagem: '/e-commerce(DevWEB)/IMG/AirPodsPro.jpg',
};

const S21 = {
    nome: 'Galaxy S21 Ultra',
    descricao: 'Galaxy S21 Ultra',
    preco: 3780.99,
    imagem: '/e-commerce(DevWEB)/IMG/S21 ultra.jpg',
};

const ps5Controller = {
    nome: 'PS5 Blue Controller',
    descricao: 'PS5 Blue Controller',
    preco:  305.99,
    imagem: '/e-commerce(DevWEB)/IMG/controlePs5.jpg',
};

// LOGICA NA PROPAGRANDA 

// Variáveis para controlar o estado da galeria
let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.product-image').length;

// Botão "Next"
const nextButton = document.querySelector('.next-button');

// Evento de clique no botão "Next"
nextButton.addEventListener('click', () => {
    // Ocultar a imagem atual
    document.querySelector('.product-image.active').classList.remove('active');

    // Avançar para a próxima imagem (ciclicamente)
    currentImageIndex = (currentImageIndex + 1) % totalImages;

    // Exibir a nova imagem atual
    document.querySelectorAll('.product-image')[currentImageIndex].classList.add('active');
});

//TESTE KEYDOWN

// Obtenha o campo de entrada e o botão pelo ID
const campoDeEntrada = document.getElementById("search");
const botao = document.getElementById("btn-searchBar");

// Adicione um ouvinte de evento de teclado ao campo de entrada
campoDeEntrada.addEventListener("keydown", function(event) {
  // Verifique se a tecla pressionada é a tecla "Enter" (código 13)
  if (event.keyCode === 13) {
    // Execute o clique no botão
    botao.click();
  }
});

// Obtenha o link pelo ID
const meuLink = document.getElementById("home-page");
const sectionCadastro = document.querySelector('.cadastro');


// Adicione um ouvinte de evento de clique ao link
meuLink.addEventListener("click", function(event) {
  // Evite a navegação padrão (evite que o link abra uma nova página)
  event.preventDefault();
  sectionCadastro.style.display = "flex";

});

// Redirecionamento
const btnSmart = document.getElementById('btn-smartfones');

btnSmart.addEventListener('click', function() {
    // Substitua 'URL_DESTINO' pela URL para a qual você deseja redirecionar.
    window.location.href = '/e-commerce(DevWEB)/pages/smartphones.html';
});

const btnGames = document.getElementById('btn-games');

btnGames.addEventListener('click', function() {
    // Substitua 'URL_DESTINO' pela URL para a qual você deseja redirecionar.
    window.location.href = '/e-commerce(DevWEB)/pages/games.html';
});

const btnNotes = document.getElementById('btn-notebook');

btnNotes.addEventListener('click', function() {
    // Substitua 'URL_DESTINO' pela URL para a qual você deseja redirecionar.
    window.location.href = '/e-commerce(DevWEB)/pages/notebooks.html';
});

const homePage = document.getElementById('home-page');

homePage.addEventListener('click', function() {
    // Substitua 'URL_DESTINO' pela URL para a qual você deseja redirecionar.
    window.location.href = '/e-commerce(DevWEB)/pages/index.html';
});

// CAMPO SENHA 

    function togglePasswordVisibilityCadastro() {
    var senhaInput = document.getElementById("senha-cadastro");
    var toggleButton = document.getElementById("toggle1");

    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      toggleButton.classList.remove("fa-eye-slash");
      toggleButton.classList.add("fa-eye");
    } else {
      senhaInput.type = "password";
      toggleButton.classList.remove("fa-eye");
      toggleButton.classList.add("fa-eye-slash");
    }
  }

  function togglePasswordVisibilityCadastro2() {
    var senhaInput = document.getElementById("senha-cadastro-2");
    var toggleButton = document.getElementById("toggle2");

    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      toggleButton.classList.remove("fa-eye-slash");
      toggleButton.classList.add("fa-eye");
    } else {
      senhaInput.type = "password";
      toggleButton.classList.remove("fa-eye");
      toggleButton.classList.add("fa-eye-slash");
    }
  }

  function togglePasswordVisibilityLogin() {
    var senhaInput = document.getElementById("senha-login");
    var toggleButton = document.getElementById("toggle3");

    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      toggleButton.classList.remove("fa-eye-slash");
      toggleButton.classList.add("fa-eye");
    } else {
      senhaInput.type = "password";
      toggleButton.classList.remove("fa-eye");
      toggleButton.classList.add("fa-eye-slash");
    }
  }
















