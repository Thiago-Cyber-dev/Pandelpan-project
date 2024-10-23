const logoutLink = document.getElementById('logout-link');
const logoutModal = document.getElementById('logout-modal');
const confirmLogout = document.getElementById('confirm-logout');
const cancelLogout = document.getElementById('cancel-logout');

// Cuando se haga clic en el enlace de cerrar sesión, se mostrará el modal
logoutLink.addEventListener('click', function (event) {
    event.preventDefault();
    logoutModal.style.display = 'block'; 
});

// Cuando se haga clic en el botón de confirmación, el nombre del usuario se convierte en vacio y se redirecciona a la pagina iniciosesion.html
confirmLogout.addEventListener('click', function () {
    localStorage.setItem("nombreUser", "")
    window.location.href = 'iniciosesion.html'; 
});

// Cuando se haga clic en el botón de cancelar, ocultar el modal
cancelLogout.addEventListener('click', function () {
    logoutModal.style.display = 'none'; 
});

// Cerrar el modal si se hace clic fuera de la ventana del modal
window.addEventListener('click', function (event) {
    if (event.target == logoutModal) {
        logoutModal.style.display = 'none'; 
    }
});