window.addEventListener("load", function () {
  let formulario = document.querySelector("form"); // como capturar el formulario!

  formulario.addEventListener("submit", function (e) {
    let errores = [];
    let ulerrores = document.querySelector("#errores");
    ulerrores.innerHTML = "";

    let nombre = document.querySelector("#Nombre");
    if (nombre.value == "") {
      errores.push("Debes escribir un nombre");
    }
    if (nombre.value.length < 2) {
      errores.push("Debes escribir más de 2 caracteres");
    }

    let apellido = document.querySelector("#Apellido");
    if (apellido.value == "") {
      errores.push("Debes escribir un apellido");
    }
    if (apellido.value.length < 2) {
      errores.push("Debes escribir más de 2 caracteres");
    }

    let telefono = document.querySelector("#Telefono");
    if (telefono.value == "") {
      errores.push("Debes escribir un telefono");
    }
    if (telefono.value.length < 2) {
      errores.push("Debes escribir más de 2 telefono");
    }

    let mail = document.querySelector("#mail");
    if (mail.value == "") {
      errores.push("Debes escribir un mail");
    }

    let confirmEmail = document.querySelector("#confirmEmail");
    if (confirmEmail.value == "") {
      errores.push("Debes escribir nuevamente el mail");
    }

    let password = document.querySelector("#password");
    if (password.value == "") {
      errores.push("Debes escribir una contraseña");
    }

    let confirmPassword = document.querySelector("#confirmPassword");
    if (confirmPassword.value == "") {
      errores.push("Debes escribir un nuevamente la contraseña");
    }

    if (errores.length > 0) {
      e.preventDefault();

      for (let i = 0; i < errores.length; i++) {
        ulerrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
