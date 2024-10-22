function registrarUsuario() {
    const nombre1= document.getElementById("nombre1").value;
    const nombre2= document.getElementById("nombre2").value;
    const apellido1= document.getElementById("apellido1").value;
    const apellido2= document.getElementById("apellido2").value;
    const correo1= document.getElementById("correo1").value;
    const contrasena1= document.getElementById("contrasena1").value;
    const contrasena2= document.getElementById("contrasena2").value;
    const selectGenero= document.getElementById("selectGenero").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if(contrasena1 == contrasena2){
        const nuevoUsuario={
            nombre1:nombre1,
            nombre2:nombre2,
            apellido1:apellido1,
            apellido2:apellido2,
            correo:correo1,
            contrasena:contrasena1,
            genero:selectGenero
        }
        
        usuarios.push(nuevoUsuario)


        localStorage.setItem("usuarios",JSON.stringify(usuarios))
        alert("usuario registrado exitosamente") 
        window.location.href = "index.html"
    }else{
        alert("Las contraseñas no coinciden, intentelo de nuevo")
    } 

}

function inicioSesionUsuario(){
    const correo= document.getElementById("correo").value;
    const contrasena= document.getElementById("contrasena").value;
    const usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo);
 console.log(usuarioEncontrado.correo,usuarioEncontrado.contrasena)
    if (usuarioEncontrado.correo== correo && usuarioEncontrado.contrasena== contrasena ) {
        window.location.href = "index.html"
    }else{
        alert("el usuario o la contraseña son incorrectos, o no tienes una cuenta")
    }

}