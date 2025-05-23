document.getElementById("enviar").addEventListener("click", validarFormulario);

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje");

  let errores = [];
    if (nombre === "" || !/^[a-zA-Z]+$/.test(nombre)) {
        errores.push("Nombre inválido (vacío o contiene caracteres no válidos)");
    }
  if (nombre === "" || nombre.length > 50) {
    errores.push("Nombre inválido (vacío o muy largo)");
  }
  if (apellido === "" || !/^[a-zA-Z]+$/.test(apellido)) {
        errores.push("Apellido inválido (vacío o contiene caracteres no válidos)");
    }
  if (apellido === "" || apellido.length > 50) {
    errores.push("Apellido inválido (vacío o muy largo)");
  }
  if (isNaN(edad) || edad < 0) {
    errores.push("Edad inválida");
  } else if (edad < 18) {
    errores.push("Debe ser mayor de edad");
  }
  if (isNaN(altura) || altura < 0 || altura > 230) {
    errores.push("Altura inválida");
  }
  if (correo === "" || !correo.includes("@")) {
    errores.push("Correo inválido");
  }

  if (errores.length === 0) {
    mensaje.textContent = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Errores:\n" + errores.join("\n");
    mensaje.style.color = "red";
  }
}
