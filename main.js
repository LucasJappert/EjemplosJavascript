console.log("Iniciando...");


var ElementoContenedorDeItems = document.getElementById("ContenedorDeItems");
var BotonGuardar = document.getElementById("BotonGuardar");
BotonGuardar.addEventListener('click', function(e){
    var item = ArmarItem();

    DibujarItemEnContenedorDeItems(item);

    LimpiarCajasDeTexto();
})



function DibujarItemEnContenedorDeItems(item){
    ElementoContenedorDeItems.innerHTML = item + ElementoContenedorDeItems.innerHTML;
}

function ArmarItem(){
    var textTituloTarea = document.getElementById("textTituloTarea");
    var textDiaHorario = document.getElementById("textDiaHorario");

    return "<div class='Item'>" + textTituloTarea.value + " - " + textDiaHorario.value + "</div>";
}

function LimpiarCajasDeTexto(){
    textTituloTarea.value = "";
    textDiaHorario.value = "";
}

