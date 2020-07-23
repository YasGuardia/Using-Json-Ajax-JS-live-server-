var pasados = [];
var html = "";
for (let i = 0; i < pasados.length; i++) {
    html += `<div class="evento"> <a href="detalle.html?id=${pasados[i].id}"> ${pasados[i].titulo}</a> </div>`;

}
$(document).ready(function() {

    //cargando los datos
    $.ajax({
        url: "info.json"
    }).done(function(resultado) {

        //llenando la variable
        eventos = resultado.eventos;

        //obteniendo el id del url
        var id = location.search.match(/id=(\d)*/)[1]

        evento = eventos.find(function(element) {
                return element.id == id
            })
            //llenando dinamicamente los eventos
        var html = `<div class="col-12">
        <div class="card flex-md-row mb-4  h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
          <h3 class="mb-0" color: blue>
                ${evento.nombre}</h3>
                <div class="mb-1 text-muted ">
                <p class="card-text mb-auto">${evento.fecha} - ${evento.lugar}</p></div>
                <p class="card-text mb-auto">${evento.descripcion}</p>
                <p class="card-text mb-auto text-info">Costo: ${evento.precio}</p>
                <p class="card-text mb-auto text-warning">Invitados: ${evento.invitados}</p>
                </div>
                </div>
                `
        document.getElementById("evento").innerHTML = html
    });

});