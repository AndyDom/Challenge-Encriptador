const cajaTexto = document.querySelector(".caja-texto");
const mensaje = document.querySelector(".texto-procesado")

function botonEncriptar(){
    var largo = cajaTexto.value.length
    if(largo > 0){
        insertarTabla()
        const cajaTexto = document.querySelector(".caja-texto");
        const mensaje = document.querySelector(".texto-procesado")
        const textoEncriptado = encriptar(cajaTexto.value);
        mensaje.value = textoEncriptado;
        cajaTexto.value = ""
    } else{
        insertarImagen()
    }
    
}

function encriptar(texto){
    var matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    texto = texto.toLowerCase();
    for(var i=0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return texto;
}

function insertarTabla(){
    var lis = document.createElement("il");
    lis.classList.add("contenido");
    lis.innerHTML = ("<textarea name=texto class=texto-procesado cols=30 rows=10></textarea> <button class=boton id=copiar type=button onclick=copiar()>Copiar</button>")
    var padre = document.querySelector(".cajaResultados")
    var cambiar = document.querySelector(".contenido");
    padre.removeChild(cambiar)
    padre.appendChild(lis)
}

function insertarImagen(){
        var lis = document.createElement("il");
        lis.classList.add("contenido");
        lis.innerHTML = ("<img class=munheco src=imagenes/Muñeco.png><h2 class=aviso>Ningún mensaje fue encontrado</h2><p class=ingreseTexto>Ingresa el texto que desees encriptar o desencriptar. </p>")
        var padre = document.querySelector(".cajaResultados")
        var cambiar = document.querySelector(".contenido");
        padre.removeChild(cambiar)
        padre.appendChild(lis)
}