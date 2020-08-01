var btnElement = document.querySelector('button.botao');
var boxElement = document.querySelector('.box');

btnElement.onclick = function(){
  return box();
}

function box(){
  boxElement.style.width = 100;
  boxElement.style.height = "100px";
  boxElement.style.backgroundColor = '#f00';
}
