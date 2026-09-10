/* ============================================================================
   ARQUIVO: js/script.js
   ----------------------------------------------------------------------------
   O QUE É ESTE ARQUIVO?
   É o JavaScript do site: a linguagem que dá COMPORTAMENTO à página.
   HTML = estrutura (ossos) | CSS = aparência (roupa) | JS = ação (músculos).

   COMO ELE SE CONECTA COM O HTML?
   Cada página tem, no FINAL do <body>, esta linha:
       <script src="js/script.js"></script>
   O script fica no final PORQUE ele manipula elementos da página: se fosse
   carregado no <head>, os elementos ainda não existiriam e daria erro.

   CONCEITO CENTRAL: DOM (Document Object Model)
   O navegador transforma o HTML numa "árvore de objetos" chamada DOM.
   O JS enxerga cada tag como um OBJETO que pode ser lido e modificado:
   document.getElementById("x") = "pegue o elemento cujo id é x".

   POR QUE "if (elemento)" EM TODO LUGAR?
   Este MESMO arquivo é carregado nas 4 páginas, mas cada página tem
   elementos diferentes. Antes de usar um elemento, verificamos se ele
   EXISTE na página atual — senão o JS daria erro e pararia de funcionar.
   ========================================================================== */

// "use strict" ativa o "modo rigoroso": o JS passa a acusar erros comuns
// (como usar variável não declarada) em vez de ignorar silenciosamente.
"use strict";

/* ----------------------------------------------------------------------------
   1. MENU MOBILE (abrir/fechar)
   ----------------------------------------------------------------------------
   COMO FUNCIONA:
   1. Pegamos o botão hambúrguer e a lista do menu pelo id.
   2. addEventListener("click", ...) registra: "quando clicarem, execute isso".
   3. classList.toggle("aberto") adiciona a classe se não existe, remove se
      existe (interruptor liga/desliga). O CSS mostra/esconde o menu a partir
      dessa classe. O JS não mexe no estilo direto: ele troca CLASSES e o
      CSS decide a aparência. Essa é a forma correta de fazer!
---------------------------------------------------------------------------- */
const botaoMenu = document.getElementById("botao-menu"); // botão ☰
const menu = document.getElementById("menu");             // lista <ul>

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("aberto");
  });
}

/* ----------------------------------------------------------------------------
   2. ANO ATUAL NO RODAPÉ (automático)
   ----------------------------------------------------------------------------
   new Date().getFullYear() pega o ano de HOJE no computador do visitante.
   textContent troca o TEXTO de um elemento (seguro: não interpreta HTML).
   Resultado: o rodapé mostra "© 2026 ..." sem você precisar atualizar o ano.
---------------------------------------------------------------------------- */
const anoRodape = document.getElementById("ano");
if (anoRodape) {
  anoRodape.textContent = new Date().getFullYear();
}

/* ----------------------------------------------------------------------------
   3. TROCA DE TEMA (claro / escuro)
   ----------------------------------------------------------------------------
   COMO FUNCIONA:
   1. document.documentElement = a tag <html>. Vamos ler/trocar o atributo
      data-theme dela ("light" ou "dark"). O CSS reage a esse atributo.
   2. localStorage = "gavetinha" do navegador que GUARDA dados mesmo depois
      de fechar a aba. Salvamos o tema escolhido para lembrar na próxima visita.
---------------------------------------------------------------------------- */
const botaoTema = document.getElementById("botao-tema");

if (botaoTema) {
  // --- 3a. Ao CARREGAR a página: aplica o tema salvo (se existir) ---
  const temaSalvo = localStorage.getItem("tema"); // lê a "gavetinha"
  if (temaSalvo === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    botaoTema.textContent = "☀️"; // mostra sol (clique volta ao claro)
  }

  // --- 3b. Ao CLICAR no botão: alterna entre os temas ---
  botaoTema.addEventListener("click", function () {
    const temaAtual = document.documentElement.getAttribute("data-theme");
    if (temaAtual === "dark") {
      // Estava escuro -> volta ao claro (remove o atributo)
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("tema", "light"); // salva a escolha
      botaoTema.textContent = "🌙";
    } else {
      // Estava claro -> vai para o escuro
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("tema", "dark");
      botaoTema.textContent = "☀️";
    }
  });
}

/* ----------------------------------------------------------------------------
   4. CONTADOR (página JavaScript)
   ----------------------------------------------------------------------------
   CONCEITO: VARIÁVEL + FUNÇÃO + EVENTO.
   - let contador = 0  -> variável (caixinha que guarda um valor que MUDA).
     Usamos "let" (pode mudar), não "const" (constante, não muda).
   - function atualizarTela() -> FUNÇÃO = bloco de código com nome, que só
     executa quando CHAMADO. Evita repetir código: chamamos 3 vezes abaixo.
---------------------------------------------------------------------------- */
let contador = 0; // valor atual do contador (começa em zero)

const numeroContador = document.getElementById("numero-contador");
const botaoSomar = document.getElementById("botao-somar");
const botaoSubtrair = document.getElementById("botao-subtrair");
const botaoZerar = document.getElementById("botao-zerar");

// Função que escreve o valor atual na tela
function atualizarContador() {
  if (numeroContador) {
    numeroContador.textContent = contador;
  }
}

// Só registra os cliques se os botões existirem nesta página
if (botaoSomar && botaoSubtrair && botaoZerar) {
  botaoSomar.addEventListener("click", function () {
    contador = contador + 1; // soma 1 (atalho: contador++)
    atualizarContador();     // mostra o novo valor na tela
  });

  botaoSubtrair.addEventListener("click", function () {
    contador = contador - 1; // subtrai 1 (atalho: contador--)
    atualizarContador();
  });

  botaoZerar.addEventListener("click", function () {
    contador = 0; // volta ao zero
    atualizarContador();
  });
}

/* ----------------------------------------------------------------------------
   5. TROCADOR DE COR (página CSS)
   ----------------------------------------------------------------------------
   CONCEITO: LER valor de um <select> e APLICAR como estilo.
   - select.value devolve a OPÇÃO escolhida (ex: "#eab308").
   - elemento.style.propriedade muda o CSS direto pelo JS. Aqui faz sentido
     porque a cor é DINÂMICA (vem da escolha do usuário, não é fixa).
---------------------------------------------------------------------------- */
const seletorCor = document.getElementById("seletor-cor");
const quadradoCor = document.getElementById("quadrado-cor");

if (seletorCor && quadradoCor) {
  // "change" = evento disparado quando a seleção MUDA
  seletorCor.addEventListener("change", function () {
    const corEscolhida = seletorCor.value; // ex: "#eab308"
    quadradoCor.style.backgroundColor = corEscolhida; // aplica no quadrado
    // Mostra o código da cor dentro do quadrado (didático!)
    quadradoCor.textContent = corEscolhida;
  });
}

/* ----------------------------------------------------------------------------
   6. MINI LISTA DE TAREFAS (página JavaScript)
   ----------------------------------------------------------------------------
   CONCEITOS NOVOS:
   - ARRAY: lista de valores. const tarefas = [] começa vazia.
   - createElement: CRIA uma tag HTML nova via JS ("crie um <li>").
   - appendChild: coloca o elemento criado DENTRO de outro (pendura na árvore).
   - trim(): remove espaços em branco do início/fim do texto.
   - return: sai da função imediatamente (usado p/ ignorar texto vazio).
---------------------------------------------------------------------------- */
const campoTarefa = document.getElementById("campo-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

if (campoTarefa && botaoAdicionar && listaTarefas) {
  // Função que cria um item <li> novo e pendura na lista
  function adicionarTarefa() {
    const texto = campoTarefa.value.trim(); // pega o texto sem espaços extras

    if (texto === "") {
      alert("Digite uma tarefa antes de adicionar!"); // avisa e...
      return; // ...sai da função (não cria item vazio)
    }

    // 1. Cria os elementos novos (ainda só na memória, não na tela)
    const item = document.createElement("li");       // <li> da tarefa
    const textoItem = document.createElement("span"); // texto dentro do <li>
    const botaoRemover = document.createElement("button"); // botão ✖

    // 2. Preenche o conteúdo deles
    textoItem.textContent = texto;
    botaoRemover.textContent = "✖";
    botaoRemover.type = "button"; // evita comportamento de submit em forms

    // 3. Cada botão ✖ remove O PRÓPRIO item (remove() deleta o elemento)
    botaoRemover.addEventListener("click", function () {
      item.remove();
    });

    // 4. Monta a estrutura: <li> contém <span> + <button>
    item.appendChild(textoItem);
    item.appendChild(botaoRemover);

    // 5. Pendura o <li> pronto dentro da <ul> -> AGORA aparece na tela
    listaTarefas.appendChild(item);

    // 6. Limpa o campo e devolve o foco (cursor) para digitar a próxima
    campoTarefa.value = "";
    campoTarefa.focus();
  }

  // Adiciona ao CLICAR no botão...
  botaoAdicionar.addEventListener("click", adicionarTarefa);

  // ...e também ao apertar ENTER dentro do campo (evento "keydown" + tecla).
  // event.key === "Enter" identifica QUAL tecla foi pressionada.
  campoTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      adicionarTarefa();
    }
  });
}

/* ----------------------------------------------------------------------------
   7. MENSAGEM DE BOAS-VINDAS (página inicial)
   ----------------------------------------------------------------------------
   CONCEITO: CONDICIONAL (if / else if / else) = "SE ... SENÃO SE ... SENÃO".
   getHours() devolve a hora atual (0-23). Conforme a hora, mostramos
   "Bom dia", "Boa tarde" ou "Boa noite". O programa DECIDE sozinho.
---------------------------------------------------------------------------- */
const saudacao = document.getElementById("saudacao");

if (saudacao) {
  const hora = new Date().getHours(); // ex: 14 (2h da tarde)

  if (hora >= 5 && hora < 12) {
    // && significa "E": as DUAS condições precisam ser verdadeiras
    saudacao.textContent = "☀️ Bom dia! Bora estudar?";
  } else if (hora >= 12 && hora < 18) {
    saudacao.textContent = "🌤️ Boa tarde! Bora estudar?";
  } else {
    saudacao.textContent = "🌙 Boa noite! Bora estudar?";
  }
}

/* ----------------------------------------------------------------------------
   8. BOTÃO "VOLTAR AO TOPO"
   ----------------------------------------------------------------------------
   CONCEITOS:
   - Evento "scroll" na window: dispara TODA VEZ que a página rola.
   - window.scrollY: quantos pixels a página já rolou para baixo.
   - scrollTo({top: 0, behavior: "smooth"}): rola até o topo ANIMADO.
---------------------------------------------------------------------------- */
const voltarTopo = document.getElementById("voltar-topo");

if (voltarTopo) {
  // Mostra o botão só depois de rolar 300px para baixo
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      voltarTopo.style.display = "block"; // aparece
    } else {
      voltarTopo.style.display = "none"; // some
    }
  });

  // Ao clicar: sobe suavemente até o topo
  voltarTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
