window.onload = function () {
  const descripcion = document.querySelector(".description");
  const mensajeErrorDescripcion = document.querySelector(
    "#error-message-descripcion"
  );
  const tarifa = document.querySelector("#tarifa");
  const mensajeErrorTarifa = document.querySelector("#error-message-tarifa");
  const añosDeExperiencia = document.querySelector("#añosDeExperiencia");
  const mensajeañosDeExperiencia = document.querySelector(
    "#error-message-añosDeExperiencia"
  );

  descripcion.addEventListener("blur", (event) => {
    if (descripcion.value.length < 20) {
      descripcion.style.border = "solid red";
      mensajeErrorDescripcion.style.display = "";
    } else {
      descripcion.style.border = "none";
      mensajeErrorDescripcion.style.display = "none";
    }
  });

  tarifa.addEventListener("blur", (event) => {
    if (tarifa.value.length < 1) {
      tarifa.style.border = "solid red";
      mensajeErrorTarifa.style.display = "";
    } else {
      tarifa.style.border = "none";
      mensajeErrorTarifa.style.display = "none";
    }
  });

  añosDeExperiencia.addEventListener("blur", (event) => {
    if (añosDeExperiencia.value.length < 1) {
      añosDeExperiencia.style.border = "solid red";
      mensajeañosDeExperiencia.style.display = "";
    } else {
      añosDeExperiencia.style.border = "none";
      mensajeañosDeExperiencia.style.display = "none";
    }
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const errores = document.querySelectorAll(".error-message-front");
    for (let i = 0; i < errores.length; i++) {
      if (errores[i].style.display != "none") {
        event.preventDefault();
        break;
      }
    }
  });
};
