var carta1 = {
  nome: "Bulbassauro", imagem:"https://pbs.twimg.com/profile_images/1239306399001305088/mLtZ9NGb_400x400.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
var carta2 = {
  nome: "Charmander",
  imagem:"https://a-static.mlcdn.com.br/1500x1500/charmander-pokemon-fantasia-pijama-kigurumi-macacao-roupa-infantil-adulto-anime-cosplay-kigurama/kigurumix/9526381570/fa3d5e34831b5ce49a6278cab4d1a7ee.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 7
  }
};
var carta3 = {
  nome: "Squirtle", imagem:"http://pm1.narvii.com/6834/40cb4bdb3b3f5a1a28f5ab4fbdfc2ac391076190v2_00.jpg",
  atributos: {
    ataque: 7,
    defesa: 10,
    magia: 6
  }
};
var carta4 = {
  nome: "Pikachu", imagem:"https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 9
  }
  
}
var carta5 = {
  nome: "Chikorita",
  imagem: "https://pm1.narvii.com/6237/af89b57de82cf1e1dc6160c3ee5439584bf9483b_hq.jpg",
  atributos:{
    ataque: 7,
    defesa: 8,
    magia: 8
  }
}
var carta6 = {
  nome: "Totodile",
  imagem: "http://pm1.narvii.com/6418/398268c05cc21d4e116755d7074045df0c7c0ebd_00.jpg",
  atributos:{
    ataque:8,
    defesa: 6,
    magia: 7
  }
}
var carta7 = {
  nome:"Cyndaquil",
  imagem: "https://shop7.webmodule.prestashop.net/pokedoge/11878-large_default/cyndaquil.jpg",
  atributos:{
    ataque: 9,
    defesa: 7,
    magia: 8
  }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina
var cartaJogador

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
  
  var numeroCartaJogador = parseInt(Math.random() * 7);
  
  while (numeroCartaMaquina == numeroCartaJogador){
    var numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++){
    if(radioAtributos[i].checked == true){
      return radioAtributos[i].value;
      
    }
  }
  
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class= 'resultado-final'> Você venceu!! </p>";
  }
  else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class= 'resultado-final'> Você perdeu! </p>";
  }
  else {
    htmlResultado = "<p class= 'resultado-final'> Empatou! </p>";
  }
  
  divResultado.innerHTML = htmlResultado;
  
  document.getElementById('btnJogar').disabled = true;
  
  exibirCartaMaquina();
  
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value = '" + atributo + "'> " + atributo + " " + cartaJogador.atributos[atributo] + " <br>";
  }   
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value = '" + atributo + "'> " + atributo + " " + cartaMaquina.atributos[atributo] + " </p>";
  }   
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}