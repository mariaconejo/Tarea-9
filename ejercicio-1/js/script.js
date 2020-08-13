// funcion que solo modifica el color del texto que contenga el div container
let color = document.querySelectorAll('.container p')
function colorRam() {   
   let x=Math.floor(Math.random() * 256);
   let y=Math.floor(Math.random() * 256);  //comienza de 0 a 256 para que incluya al 255
   let z=Math.floor(Math.random() * 256);

    return `rgb(${x}, ${y}, ${z})`; // retorna un string con el rgb
}
// funcion para cambiar color de los texto al poner el mouse
function colorChange(event){
    const paragraphs = event.currentTarget;
    paragraphs.style.color = colorRam();
    return paragraphs
}

// funcion para poner los textos de nuevo en negro al quitar el mouse
function blackColor(event){
    const paragraphs = event.currentTarget;
    paragraphs.style.color = 'black';
    return paragraphs
}

let paragraphs = document.querySelectorAll('p')


for(let i = 0; i < paragraphs.length; i++){  // ciclo que recorre los parrafos y los eventos mouseenter y mouseleave
    paragraphs[i].addEventListener('mouseenter', colorChange);
    paragraphs[i].addEventListener('mouseleave', blackColor);
}
