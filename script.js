const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isLampBroken(){
  return lamp.src.indexOf ('quebrada') > -1 /* Vamos retornar o source da lâmpada, o indexof é o método 
  que procura uma string, procurando outro trecho da string, vamos procurar a palavra quebrada, quando 
  ele acha traz um número maior que -1, quando não encontra  é -1, como queremos saber se está quebrada, 
  é maior que -1 '.> -1'.  Essa condição pode ser verdadeira, quando tiver a imagem quebrada no source, 
  vai ser falsa quando não tiver a palavra quebrada. Basicamente vai retornar ou verdadeira ou falsa.
  */
}

function lampOn(){
  if( !isLampBroken () ){ /* Vamos verificar, antes de ligar ou desligar a lâmpada, se ela está quebrada.
    Quando a lâmpada não estiver quebrada, vai trocar normalmente para ligada (! significa não.)  */
  lamp.src= './img/ligada.png'; /* Vai fazer a troca da imagem, alterando pelo lamp. */
  document.getElementById('turnOn').style.display = "none";
  document.getElementById('turnOff').style.display = "block";
  document.body.style.backgroundColor = "#FFE22E"; 
}
}

function lampOff(){
  if( !isLampBroken () ){  
  lamp.src= './img/desligada.png'; 
  document.getElementById('turnOn').style.display = "block";
  document.getElementById('turnOff').style.display = "none";
  document.body.style.backgroundColor = "black"; 
  }
}


function lampBroken(){
  lamp.src='./img/quebrada.png'
  document.body.style.backgroundColor = "black";
}

document.body.style.backgroundColor = "black"; 

//Evento ao passar o mouse sobre a imagem:
turnOn.addEventListener('click', lampOn); /* Quando escutar o clique 'click', vai ligar a lâmpada, puxando
a imagem criada na função acima 'lampOn'. */
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn); /* Quando passar o mouse em cima da lâmpada, irá ligar. */
lamp.addEventListener('mouseleave', lampOff); /* Quando sair da lâmpada, irá desligar. */
lamp.addEventListener('dblclick', lampBroken); /*Quando clicar duas vezes, irá exibir a imagem da lâmpada quebrada */