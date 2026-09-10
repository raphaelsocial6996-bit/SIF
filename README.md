# 🌐 Aprenda Web — Site para estudar HTML, CSS e JavaScript

> Site simples feito para **aprender**: todo o código tem comentários explicando
> **o motivo** e **como funciona** cada parte.

## 📁 Estrutura (só 6 arquivos!)

```
├── index.html        → página inicial (roteiro de estudos)
├── html.html         → lição de HTML (tags, listas, links, tabelas)
├── css.html          → lição de CSS (seletores, cores, box model, responsivo)
├── javascript.html   → lição de JavaScript (contador, tarefas, eventos)
├── css/
│   └── style.css     → TODA a aparência (variáveis, tema escuro, responsivo)
└── js/
    └── script.js     → TODA a interatividade (menu, tema, demos)
```

## 🚀 Como abrir o site

**Opção 1 — direto no navegador:**
Abra o arquivo `index.html` com dois cliques.

**Opção 2 — com servidor local (recomendado):**
```bash
cd SIF
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## 🗺️ Roteiro de estudos sugerido

1. **Navegue** pelo site e teste tudo que é clicável (botões, tema 🌙, menu ☰).
2. **Leia o código-fonte** — cada arquivo explica o porquê das coisas:
   - `index.html` → estrutura base de toda página (head, body, semântica)
   - `html.html` → cada tag com exemplo ao vivo
   - `css/style.css` → 14 seções: variáveis → responsividade
   - `js/script.js` → 8 seções: menu → DOM → eventos → localStorage
3. **Abra o DevTools** (`F12`): inspecione elementos, mude CSS ao vivo, teste JS no Console.
4. **Faça os mini-desafios** no final de cada lição.
5. **Quebre e conserte**: mude cores, textos e valores. É o melhor jeito de aprender!

## 💡 Conceitos cobertos

| HTML | CSS | JavaScript |
|---|---|---|
| Estrutura, head/body | Seletores, classes, ids | Variáveis (let/const) |
| Títulos, parágrafos | Cores (nome, hex, rgba) | Funções |
| Listas ul/ol | Box model | Eventos (click, change...) |
| Links, imagens | Flexbox e Grid | DOM (getElementById...) |
| Tabelas | Variáveis + tema escuro | Condicionais if/else |
| Tags semânticas | Media queries (responsivo) | localStorage |
| Formulários básicos | Transições e hover | Criar elementos (createElement) |

## 📚 Próximos passos

- [MDN Web Docs (pt-BR)](https://developer.mozilla.org/pt-BR/) — a melhor referência
- [freeCodeCamp](https://www.freecodecamp.org/) — curso gratuito com exercícios
- Depois: Git/GitHub, Flexbox Froggy, e um projeto próprio (portfólio, blog...)
