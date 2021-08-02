// URL API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";


//Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((Response) => Response.json())
    .then((json) => {
        pokeData(json.results), paginacion(json.next, json.previous);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// const pokedata
const pokeData = (data) => {
    
    let html = "";
     document.getElementById("datosPersonajes").innerHTML = "";
    data.forEach((pj) => {
        let nombre = pj.name;
        const URL = pj.url;
        return fetch(URL)
         .then((Response) => Response.json())
         .then((json) => {
            llenarDatos(json, html, nombre);
         })
         .catch((error) => {
            console.log("error", error);
          });
    })
}

// Dibuja cards de personajes
const llenarDatos = (data, html, nombre) => {
    console.log(data);

      html += '<div class="col mt-5">';
      html += '<div class="card" style="width: 10rem;">';
      html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">`;
      html += '<div class="card-body">';
      html += `<h5 class="card-title">Nombre Pokemon: ${nombre}</h5>`;
      html += `<h5 class="card-title">Peso:  ${data.weight}</h5>`;
      html += `<h5 class="card-title">Altura:  ${data.height}</h5>`;
      html += "</div>";
      html += "</div>";
      html += "</div>";

    document.getElementById("datosPersonajes").innerHTML += html;
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
