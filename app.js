//   Declaracion de variables

let caracteres = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let btn= document.querySelector('#btn')
let body= document.querySelector('body')


//   Funciones

const obtengoNumero = () => {
    largo = Math.floor(Math.random()*caracteres.length)
    return largo 
    // console.log(largo)
}

const cambiaColor = () => {
    let hexacolor = '#'
    for (let i = 0; i<6; i++){
        hexacolor=hexacolor+caracteres[obtengoNumero()]
        console.log(hexacolor)
    }
    body.style.backgroundColor=hexacolor
    let nombre = document.querySelector('#nombre')
    nombre.textContent = hexacolor
    
}

//  Eventos

btn.addEventListener('click',cambiaColor)


