var invoker = {
  nome: "Invoker",
  matou: 0,
  morreu: 0,
  assistencia: 0,
  pontos: 0
};

var pudge = {
  nome: "Pudge",
  matou: 0,
  morreu: 0,
  assistencia: 0,
  pontos: 0
};

var necrophos = {
  nome: "Necrophos",
  matou: 0,
  morreu: 0,
  assistencia: 0,
  pontos: 0
};

var lina = {
  nome: "Lina",
  matou: 0,
  morreu: 0,
  assistencia: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
        <tr>
          <td>${invoker.nome}</td>
          <td>${invoker.matou}</td>
          <td>${invoker.morreu}</td>
          <td>${invoker.assistencia}</td>
          <td>${invoker.pontos}</td>
          <td><button onClick="adicionarMatou(invoker)">Matou</button></td>
          <td><button onClick="adicionarMorreu(invoker)">Morreu</button></td>
          <td><button onClick="adicionarAssistencia(invoker)">Assistencia</button></td>
        </tr>
        <tr>
          <td>${pudge.nome}</td>
          <td>${pudge.matou}</td>
          <td>${pudge.morreu}</td>
          <td>${pudge.assistencia}</td>
          <td>${pudge.pontos}</td>
          <td><button onClick="adicionarMatou(pudge)">Matou</button></td>
          <td><button onClick="adicionarMorreu(pudge)">Morreu</button></td>
          <td><button onClick="adicionarAssistencia(pudge)">Assistência</button></td>
        </tr>
        <tr>
          <td>${necrophos.nome}</td>
          <td>${necrophos.matou}</td>
          <td>${necrophos.morreu}</td>
          <td>${necrophos.assistencia}</td>
          <td>${necrophos.pontos}</td>
          <td><button onClick="adicionarMatou(necrophos)">Matou</button></td>
          <td><button onClick="adicionarMorreu(necrophos)">Morreu</button></td>
          <td><button onClick="adicionarAssistencia(necrophos)">Assistência</button></td>
        </tr>
        <tr>
          <td>${lina.nome}</td>
          <td>${lina.matou}</td>
          <td>${lina.morreu}</td>
          <td>${lina.assistencia}</td>
          <td>${lina.pontos}</td>
          <td><button onClick="adicionarMatou(lina)">Matou</button></td>
          <td><button onClick="adicionarMorreu(lina)">Morreu</button></td>
          <td><button onClick="adicionarAssistencia(lina)">Assistência</button></td>
        </tr>
  `;
}

function adicionarMatou(jogador) {
  jogador.matou++;
  jogador.pontos = jogador.pontos + 1;
  exibirNaTela();
}
//(jogador.pontos = jogador.pontos + 1) é igual (jogador.pontos--)
function adicionarMorreu(jogador) {
  jogador.morreu++;
  jogador.pontos--;
  exibirNaTela();
}
//(jogador.pontos = jogador.pontos + -1) é igual (jogador.pontos--)
function adicionarAssistencia(jogador) {
  jogador.assistencia++;
  jogador.pontos = jogador.pontos + +1;
  exibirNaTela();
}
