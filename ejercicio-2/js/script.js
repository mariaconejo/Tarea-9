
let square = true
// funcion que alterna los cuadrados de rojo azul

function changeColor(event) {
  
  if(square == true){
    event.currentTarget.style.backgroundColor = '#FF0000';
    square = false
  }else{
    event.currentTarget.style.backgroundColor = '#0000FF';
    square = true;
  }
  
  
}


let elements = document.querySelectorAll('div');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
} 




