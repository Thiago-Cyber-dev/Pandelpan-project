function checkAllFilled() {
  const form = document.getElementById('miformulario');

  // Verificar si todos los inputs requeridos están llenos
  const inputsLlenos = Array.from(form.elements)
    .filter(el => el.tagName === 'INPUT' && el.hasAttribute('required'))
    .every(input => input.value.trim() !== '');

  return inputsLlenos;
}

function registrarUsuario() {
  const allFilled = checkAllFilled();

  if (allFilled) {
    const nombre1 = document.getElementById("nombre1").value;
    const nombre2 = document.getElementById("nombre2").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;
    const correo1 = document.getElementById("correo1").value;
    const contrasena1 = document.getElementById("contrasena1").value;
    const contrasena2 = document.getElementById("contrasena2").value;
    const selectGenero = document.getElementById("selectGenero").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (contrasena1 == contrasena2) {
      const nuevoUsuario = {
        nombre1: nombre1,
        nombre2: nombre2,
        apellido1: apellido1,
        apellido2: apellido2,
        correo: correo1,
        contrasena: contrasena1,
        genero: selectGenero
      }
      usuarios.push(nuevoUsuario)
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      alert("usuario registrado exitosamente")
      window.location.href = "index.html"
    } else {
      alert("Las contraseñas no coinciden, intentelo de nuevo")
    }
  } else {
    alert('Algunos campos están vacíos, registra todos los campos para crear una cuenta');
  }
}

function inicioSesionUsuario() {
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo);
  
  if (correo == "" || contrasena == "") {
    alert("ingrese correo y contraseña para iniciar sesión");
  } else if (usuarioEncontrado.correo == correo && usuarioEncontrado.contrasena == contrasena) {
    localStorage.setItem("nombreUser", usuarioEncontrado.nombre1 + " " + usuarioEncontrado.apellido1)
    window.location.href = "index.html";
  } else {
    alert("el usuario o la contraseña son incorrectos, o no tienes una cuenta");
  }
}