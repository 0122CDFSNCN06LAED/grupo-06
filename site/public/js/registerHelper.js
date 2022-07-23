window.onload = function () {
  const descripcion = document.querySelector(".description");
  const mensajeErrorDescripcion = document.querySelector(
    "#error-message-descripcion"
  );
  const tarifa = document.querySelector("#tarifa");
  const mensajeErrorTarifa = document.querySelector("#error-message-tarifa");
  const mensajeErrorTarifaNumero = document.querySelector(
    "#error-message-tarifa-numero"
  );
  const añosDeExperiencia = document.querySelector("#añosDeExperiencia");
  const mensajeañosDeExperiencia = document.querySelector(
    "#error-message-añosDeExperiencia"
  );
  const mensajeañosDeExperienciaNumero = document.querySelector(
    "#error-message-añosDeExperiencia-numero"
  );  
  const codigoPostal = document.querySelector("#codigoPostal");
  const mensajeCodigoPostal = document.querySelector(
    "#error-message-codigoPostal"
  );
  const mensajeCodigoPostalNumero = document.querySelector(
    "#error-message-codigoPostal-numero"
  );
  const barrio = document.querySelector("#barrio");
  const mensajeErrorBarrio = document.querySelector("#error-message-barrio");
  const numero = document.querySelector("#numero");
  const mensajeErrorNumero = document.querySelector("#error-message-numero");
  const mensajeErrorNumeroNumero = document.querySelector(
    "#error-message-numero-numero"
  );
  const calle = document.querySelector("#calle");
  const mensajeErrorCalle = document.querySelector("#error-message-calle");

  var isNumber = function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  };

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
    if (!Number.isInteger(parseInt(tarifa.value, 10))) {
      tarifa.style.border = "solid red";
      mensajeErrorTarifaNumero.style.display = "";
    } else {
      tarifa.style.border = "none";
      mensajeErrorTarifaNumero.style.display = "none";
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

  añosDeExperiencia.addEventListener("blur", (event) => {
    if (!Number.isInteger(parseInt(añosDeExperiencia.value, 10))) {
      añosDeExperiencia.style.border = "solid red";
      mensajeañosDeExperienciaNumero.style.display = "";
    } else {
      añosDeExperiencia.style.border = "none";
      mensajeañosDeExperienciaNumero.style.display = "none";
    }
  });

  codigoPostal.addEventListener("blur", (event) => {
    if (codigoPostal.value.length < 4 || codigoPostal.value.length > 4) {
      codigoPostal.style.border = "solid red";
      mensajeCodigoPostal.style.display = "";
    } else {
      codigoPostal.style.border = "none";
      mensajeCodigoPostal.style.display = "none";
    }
  });

  codigoPostal.addEventListener("blur", (event) => {
    if (!Number.isInteger(parseInt(codigoPostal.value, 10))) {
      codigoPostal.style.border = "solid red";
      mensajeCodigoPostalNumero.style.display = "";
    } else {
      codigoPostal.style.border = "none";
      mensajeCodigoPostalNumero.style.display = "none";
    }
  });

  barrio.addEventListener("blur", (event) => {
    if (barrio.value.length < 1) {
      barrio.style.border = "solid red";
      mensajeErrorBarrio.style.display = "";
    } else {
      barrio.style.border = "none";
      mensajeErrorBarrio.style.display = "none";
    }
  });

  numero.addEventListener("blur", (event) => {
    if (numero.value.length < 1) {
      numero.style.border = "solid red";
      mensajeErrorNumero.style.display = "";
    } else {
      numero.style.border = "none";
      mensajeErrorNumero.style.display = "none";
    }
  });

  numero.addEventListener("blur", (event) => {
    if (!Number.isInteger(parseInt(numero.value, 10))) {
      numero.style.border = "solid red";
      mensajeErrorNumeroNumero.style.display = "";
    } else {
      numero.style.border = "none";
      mensajeErrorNumeroNumero.style.display = "none";
    }
  });

  calle.addEventListener("blur", (event) => {
    if (calle.value.length < 1) {
      calle.style.border = "solid red";
      mensajeErrorCalle.style.display = "";
    } else {
      calle.style.border = "none";
      mensajeErrorCalle.style.display = "none";
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
