document.getElementById("cargaCatalogo").addEventListener("click",cargarCatalogo);
function cargarCatalogo(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200) {
            cargarXML(this);
        }
    };
    xhr.open("GET","libros.xml",true);
    xhr.send();
}

function cargarXML (xml){
   var docXML = xml.responseXML;
    var tabla = "<tr><th>Artista</th><th>Titulo</th></tr>";
    var libros = docXML.getElementsbyTagName("libreria");
    for (var i = 0; i<libros.lenght; i++){
        tabla += "<tr><td>";
        tabla += libros[i].getElementsbyTagName("ISBN")[0].textContent;
        tabla += "</td><td>";
        tabla += libros[i].getElementsbyTagName("titulo")[0].textContent;
        tabla += "</td></tr>";
    }
    document.getElementById("demo").innerHTML = tabla;


}
