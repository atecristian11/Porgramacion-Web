//URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      paginacion(json.next, json.previous);
      DataUrl(json.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const DataUrl = (json2) => {
  let json = json2;
  json.forEach((url) => {
    let url1 = url.url;
    return fetch(url1)
      .then((response) => response.json())
      .then((json3) => {
        llenarDatos(json3);
        //console.log(json3.name,json3.sprites.front_default);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });
};

//Dibujar cards de personajes
const llenarDatos = (data) => {
  let html = "";

  console.log(data.name,data.sprites.front_default)
  //for (let a in data.len) {
  //}
  //for (let a = 0; a < 19; a++) {
  //}
  /*
  data.forEach((pokemon) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 18rem;">';
    html += ` <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pokemon.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    
  });*/
  

  document.getElementById("datosPersonajes").innerHTML = html;
};

//Paginación
const paginacion = (datanext, dataprevious) => {
  let prevDisabled = "";
  let nextDisabled = "";

  let html = `<li class="page-item ${
    dataprevious == null ? (prevDisabled = "disabled") : (prevDisabled = "")
  }"><a class="page-link" onclick="getData('${dataprevious}')">Previous</a></li> <li class="page-item ${
    datanext == null ? (nextDisabled = "disabled") : (nextDisabled = "")
  }" ><a class="page-link" onclick="getData('${datanext}')">Next</a></li>`;

  document.getElementById("paginacion").innerHTML = html;
};

//se ejecuta la API
getData(API);
