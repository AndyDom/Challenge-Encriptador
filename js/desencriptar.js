const cajaTexto2 = document.querySelector(".caja-texto");
const mensaje2 = document.querySelector(".texto-procesado")

function botonDesencriptar(){
    var largo = cajaTexto.value.length
    if(largo > 0){
        insertarTabla()
        const cajaTexto2 = document.querySelector(".caja-texto");
        const mensaje2 = document.querySelector(".texto-procesado")
        const textoEncriptado2 = desencriptar(cajaTexto2.value);
        mensaje2.value = textoEncriptado2;
        cajaTexto2.value = "";
    }else{
        insertarImagen();
    }
}

function desencriptar(texto){
    var matrizCodigo2 = [["enter", "e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    texto = texto.toLowerCase();
    for(var i=0; i < matrizCodigo2.length; i++){
        if(texto.includes(matrizCodigo2[i][0])){
            texto = texto.replaceAll(matrizCodigo2[i][0],matrizCodigo2[i][1])
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