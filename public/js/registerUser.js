window.addEventListener("load", function () {
  let formulario = document.querySelector("form.reservation"); // como capturar el formulario!

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.querySelector("input.Nombre");
    if (nombre.value == "") {
      alert("Debes escribir un nombre");
    } else if (nombre.value.length < 2) {
      alert("Debes escribir más de 2 caracteres");
    }

    let apellido = document.querySelector("input.Apellido");
    if (nombre.value == "") {
      alert("Debes escribir un apellido");
    } else if (nombre.value.length < 2) {
      alert("Debes escribir más de 2 caracteres");
    }

    let telefono = document.querySelector("input.Telefono");
    if (nombre.value == "") {
      alert("Debes escribir un telefono");
    } else if (nombre.value.length < 2) {
      alert("Debes escribir más de 2 telefono");
    }
  });
});
