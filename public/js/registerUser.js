window.addEventListener("load", function () {
  let formulario = document.querySelector("form"); // como capturar el formulario!

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let nombre = document.querySelector("#Nombre");
    if (nombre.value == "") {
      errores.push("Debes escribir un nombre");
    } else if (nombre.value.length < 2) {
      errores.push("Debes escribir más de 2 caracteres");
    }

    let apellido = document.querySelector("#Apellido");
    if (nombre.value == "") {
      errores.push("Debes escribir un apellido");
    } else if (nombre.value.length < 2) {
      errores.push("Debes escribir más de 2 caracteres");
    }

    let telefono = document.querySelector("#Telefono");
    if (nombre.value == "") {
      errores.push("Debes escribir un telefono");
    } else if (nombre.value.length < 2) {
      errores.push("Debes escribir más de 2 telefono");
    }

    let mail = document.querySelector("#mail");
    if (nombre.value == "") {
      errores.push("Debes escribir un mail");
    }

    let confirmEmail = document.querySelector("#confirmEmail");
    if (nombre.value == "") {
      errores.push("Debes escribir nuevamente el mail");
    }

    let password = document.querySelector("#password");
    if (nombre.value == "") {
      errores.push("Debes escribir una contraseña");
    }

    let confirmPassword = document.querySelector("#confirmPassword");
    if (nombre.value == "") {
      errores.push("Debes escribir un nuevamente la contraseña");
    }

    if (errores.length > 0) {
      e.preventDefault();

      let ulerroes = document.querySelector("#erroes");
      for (let i = 0; i < errores.length; index++) {
        ulerroes.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
