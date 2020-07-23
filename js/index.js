var proximos = [];
var hoy;
var eventos;

$(document).ready(function() {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
        url: "info.json"
    }).done(function(resultado) {

        //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        //Selecciona los eventos que sean anteriores a la fecha actual del JSON
        eventos = eventos.slice(0, 4, 3);
        for (var i = 0; i < eventos.length; i++) {
            if (eventos[i].fecha > hoy) {
                proximos.push(eventos[i]);
            }
        }

        //Ordena los eventos segun la fecha (los mas recientes primero)
        proximos = proximos.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });

        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < proximos.length; j++) {
            html += `<div class="col-6">
        <div class="card flex-md-row mb-4  h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <h3 class="mb-0">
              <a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a>
            </h3>
            <div class="mb-1 text-muted">
              ${proximos[j].fecha} - ${proximos[j].lugar}
            </div>
            <p class="card-text mb-auto">${proximos[j].descripcion}</p>
            
          </div>
        </div>
      </div>`
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("proximos").innerHTML = html

    })

});
//----------------------------------------------------------------------------
var pasados = [];
var hoy;
var eventos;

$(document).ready(function() {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
        url: "info.json"
    }).done(function(resultado) {

        //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        //Selecciona los eventos que sean anteriores a la fecha actual del JSON
        eventos = eventos.slice(0, 2);
        for (var i = 0; i < eventos.length; i++) {

            if (eventos[i].fecha < hoy) {
                pasados.push(eventos[i]);
            }
        }

        //Ordena los eventos segun la fecha (los mas recientes primero)
        pasados = pasados.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });

        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento

        for (var j = 0; j < pasados.length; j++) {
            eventos = eventos.slice(0, 2);
            html += `<div class="col-6">
        <div class="card flex-md-row mb-4  h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <h3 class="mb-0">
              <a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a>
            </h3>
            <div class="mb-1 text-muted">
              ${pasados[j].fecha} - ${pasados[j].lugar}
            </div>
            <p class="card-text mb-auto">${pasados[j].descripcion}</p>
          </div>
        </div>
      </div>`
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("pasados").innerHTML = html

    })

});







//Carga los datos que estan en el JSON (info.json) usando AJAX

//Guarda el resultado en variables

//Clasifica los eventos segun la fecha actual del JSON

//Ordena los eventos segun la fecha (los mas cercanos primero)

//Extrae solo dos eventos

//Ordena los eventos segun la fecha (los mas cercanos primero)

//Extrae solo dos eventos

//Crea un string que contenga el HTML que describe el detalle del evento

//Recorre el arreglo y concatena el HTML para cada evento

//Modifica el DOM agregando el html generado

//Crea un string que contenga el HTML que describe el detalle del evento

//Recorre el arreglo y concatena el HTML para cada evento

//Modifica el DOM agregando el html generado