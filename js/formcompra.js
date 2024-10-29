function crearPedido(){
            // Obtener los valores del formulario
            const cantidad = document.getElementById('cantidad').value;
            const descripcion = document.getElementById('descripcion').value;
            const direccion = document.getElementById('direccion').value;
            const producto = document.getElementById('producto').value;
            const contacto = document.getElementById('contacto').value;

            // Validar que todos los campos estén completos
            if (!direccion || !descripcion|| !producto || !contacto || !cantidad ) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            //mensaje de confirmación
            const mensaje = `
    ¡Pedido realizado con éxito! 🎉

    📦 Producto: ${producto}
    🔢 Cantidad: ${cantidad}
    📝 Descripción: ${descripcion.trimStart()}
    📍 Dirección: ${direccion}
    📱 Contacto: ${contacto}

    🕒 Mañana nos pondremos en contacto con usted para confirmar 
    el pedido y la hora de entrega. 
    💵 Recuerde que el pago se realiza contraentrega.
`;
            alert(mensaje);
            window.location.href = "index.html";
        }