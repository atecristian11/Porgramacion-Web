let nombre = document.getElementById("nombre");
let formu = document.getElementById("formu");

const encuesta = () => {
  nombreU = prompt("Digite su nombre por favor: ");
  if (nombreU == null || nombreU === "") {
    nStorage();
  } else {
    album = prompt("Digite el nombre del album: ");
    album1 = album.toLowerCase();
    if (album1 === "ocean") {
      creacion = prompt("Digite el año de creación de la canción: ");
      creacion1 = creacion.toLowerCase();
      if (creacion1 != "2019") {
        alert(
          "por favor ingrese el año adecuado o no puede continuar con el cuestionario"
        );
      } else {
        escritor = prompt(
          "Digite el nombre de algun escritor de esta canción: "
        );
        escritor1 = escritor.toLowerCase();
        if (
          escritor1 === "karol g" ||
          escritor1 === "omar koonze" ||
          escritor1 === "antonio rayo" ||
          escritor1 === "andy clay" ||
          escritor1 === "rene david cano rios"
        ) {
          duracion = prompt("Digite la duración de esta canción: " + "\n(Debe colocar la duración de la canción como se muestra en la descipción de la imagen)");
          duracion1 = duracion.toLowerCase();
          if (duracion1 === "2:30") {
            alert(
              "Felicidades todas tus respuestas son correctas la tienes clara"
            );
            nombre.innerHTML =
              "<strong>" +
              "Nombre: " +
              "</strong>" +
              nombreU +
              "<br>" +
              "<strong>" +
              " Album: " +
              "</strong>" +
              album1 +
              "<br>" +
              "<strong>" +
              "Año: " +
              "</strong>" +
              creacion1 +
              "<br>" +
              "<strong>" +
              "Escritor: " +
              "</strong>" +
              escritor1 +
              "<br>" +
              "<strong>" +
              "Duración: " +
              "</strong>" +
              duracion1;
            localStorage.setItem("nombre", nombreU);
            localStorage.setItem("album", album1);
            localStorage.setItem("año", creacion1);
            localStorage.setItem("escritor", escritor1);
            localStorage.setItem("duracion", duracion1);
          } else {
            alert(
              "por favor ingrese la duración adecuada de la canción o no puede continuar con el cuestionario"
            );
          }
        } else {
          alert(
            "por favor ingrese un escritor adecuado o no puede continuar con el cuestionario"
          );
        }
      }
    } else {
      alert(
        "por favor ingrese el album adecuado o no puede continuar con el cuestionario"
      );
    }
  }
};

const nStorage = () => {
  if (localStorage.getItem("nombre")) {
    nombre.innerHTML =
      "<strong>" +
      "Nombre: " +
      "</strong>" +
      localStorage.getItem("nombre") +
      "<br>" +
      "<strong>" +
      " Album: " +
      "</strong>" +
      localStorage.getItem("album") +
      "<br>" +
      "<strong>" +
      " Año: " +
      "</strong>" +
      localStorage.getItem("año") +
      "<br>" +
      "<strong>" +
      "Escritor: " +
      "</strong>" +
      localStorage.getItem("escritor") +
      "<br>" +
      "<strong>" +
      "Duración: " +
      "</strong>" +
      localStorage.getItem("duracion");
  } else {
    nombre.innerHTML = " ";
  }
};

nStorage();

formu.onclick = function () {
  encuesta();
};
