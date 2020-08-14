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
    const change = event.currentTarget;
    change.style.color = colorRam();
    
}

// funcion para poner los textos de nuevo en negro al quitar el mouse
function blackColor(event){
    const black = event.currentTarget;
    black.style.color = 'black';
}



for(let i = 0; i < color.length; i++){  // ciclo que recorre los parrafos y los eventos mouseenter y mouseleave
    color[i].addEventListener('mouseenter', colorChange);
    color[i].addEventListener('mouseleave', blackColor);
}

