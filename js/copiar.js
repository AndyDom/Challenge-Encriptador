function copiar() {

    var content = document.querySelector(".texto-procesado");
    
    content.select();
    document.execCommand('copy');
}