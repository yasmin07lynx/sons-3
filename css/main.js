//Declaração/criação da função tocaSom
function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador , listaDeTecla.lenght; contador++){
 const teclas = listaDeTeclas[contador]; //guarda o contador da lista
 const efeito = teclas.classList [1];   //chama o 2°indivudual do som
const idAudio = `#som_${efeito}`;      //utiliza a junção template string${ }
 teclas.onclick = function(){         //função anonima auxiliar para chamar tocaSom
    tocaSom(idAudio);                //chamada da funçao tocaSom com parametro idAudio
 }
 teclas.onkeydown = function (evento){
    if(evento.code != 'Tab'){
    teclas.classList.add('ativa')
 }
 }
 teclas.onkeydown = function (){
    teclas.classList.add('ativa')
 }
}