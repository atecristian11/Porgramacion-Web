// URL API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";


//Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((Response) => Response.json())
    .then((json) => {
      llenarDatos(json.results), paginacion(json.next, json.previous);


    })
    .catch((error) => {
      console.log("error", error);
    });
};

// Dibuja cards de personajes
const llenarDatos = (data) => {
    let html = "";
    console.log(data);
    data.forEach((pj) => {
      html += '<div class="col mt-5">';
      html += '<div class="card" style="width: 10rem;">';
      html += '<div class="card-body">';
      html += `<h5 class="card-title">Nombre Pokemon: ${pj.name}</h5>`;
      html += "</div>";
      html += "</div>";
      html += "</div>";
      });
    document.getElementById("datosPersonajes").innerHTML = html;
  };

// Paginacion
const paginacion = (datanext, dataprevious) => {
  let prevDisabled = "";
  let nextDisabled = "";

  dataprevious == null ? (prevDisabled = "disabled") : (prevDisabled = "");
  datanext == null ? (nextDisabled = "disabled") : (nextDisabled = "");

  let html = `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${dataprevious}') ">Previous</a></li> <li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${datanext}') ">Next</a></li>`;

  document.getElementById("paginacion").innerHTML = html;
};

// Se ejecuta la API
getData(API);
