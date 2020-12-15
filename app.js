window.addEventListener("load",iniciar,false);

function iniciar() {
    var color;
    var tabla=crearTablero();
    document.getElementById("zonadibujo").appendChild(tabla);
    var colores=document.getElementById("paleta").getElementsByTagName("td");
    for (let i = 0; i < colores.length; i++) {
        colores[i].addEventListener("click",cambioColor,false);
    }
}

function crearTablero() {
    var tabla=document.createElement("table");
    tabla.setAttribute("border","1");
    tabla.setAttribute("class","tablerodibujo");
    for (let i = 0; i < 30; i++) {
        var fila=document.createElement("tr");
        tabla.appendChild(fila);
        for (let i = 0; i < 30; i++) {
            var celda=document.createElement("td");
            fila.appendChild(celda);
            celda.addEventListener("mouseover",function () {
                pintar(0);
            },false);
        }
    }
    return tabla;
}

function cambioColor(evt) {
    color=evt.target.getAttribute("class");
    var colorAnt=document.getElementById("paleta").getElementsByTagName("tr")[0].getElementsByTagName("td");
    for (let i = 0; i < colorAnt.length; i++) {
        var atributo=colorAnt[i].getAttribute("class");
        var atributos=atributo.split(" ");
        if (atributos[1]=="seleccionado") {
            colorAnt[i].removeAttribute("class");
            colorAnt[i].setAttribute("class","color"+(i+1));
        }
        if (color==atributos[0]||color==atributos[0]+" seleccionado") {
            colorAnt[i].removeAttribute("class");
            colorAnt[i].setAttribute("class","color"+(i+1)+" seleccionado");
            color=colorAnt[i].getAttribute("class");
        }

    }
   
}

function pintar(tipo) {
    if (tipo==0) {
        
    }
}