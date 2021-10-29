/*VALIDAR FORMULARIO CONTACTO*/
window.addEventListener('load', function () {

    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regMensaje = /brasil, Brasil, BRASIL/;

    let formulario = document.getElementById('form_contacto');

    formulario.addEventListener('submit', function () {

        var nombre = document.querySelector("#name");
        var apellido = document.querySelector("#surname");
        var email = document.querySelector("#email");
        var mensaje = document.querySelector("#comment");

        /*se validan que estén completos todos los campos nombre y apellido*/
        if (nombre.value.trim() == null || nombre.value.trim().length == 0) {
            document.querySelector("#error_nombre").innerHTML = "El nombre está vacío";
            document.querySelector("#error_nombre").style.display = "block";
            nombre.focus();
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }
        if (apellido.value.trim() == null || apellido.value.trim().length == 0) {
            document.querySelector("#error_apellido").innerHTML = "El apellido está vacío";
            document.querySelector("#error_apellido").style.display = "block";
            apellido.focus();
            return false;
        } else {
            document.querySelector("#error_apellido").style.display = "none";
        }

        /*se valida el mail*/
        if (email.value.trim() == null || email.value.trim().length == 0) {
            document.querySelector("#error_email").innerHTML = "El email está vacío";
            document.querySelector("#error_email").style.display = "block";
            email.focus();
            return false;
        } 
        /*valido el formato del mail*/
        else if (!regExEmail.test(email.value)) {
            document.querySelector("#error_email").innerHTML = "El email no es válido";
            document.querySelector("#error_email").style.display = "block";
            email.focus();
            return false;
        } else {
            document.querySelector("#error_email").style.display = "none";
        }

        /*valido el mensaje que tenga contenido*/
        if (mensaje.value.trim() == null || mensaje.value.trim().length == 0) {
            document.querySelector("#error_mensaje").innerHTML = "El mensaje está vacío";
            document.querySelector("#error_mensaje").style.display = "block";
            mensaje.focus();
            return false;
        } 
        /*valido que no contenga la palabra brasil*/
        else if (!regMensaje.test(mensaje.value)) {
            document.querySelector("#error_mensaje").innerHTML = "No se puede nombrar al país vecino";
            document.querySelector("#error_mensaje").style.display = "block";
            mensaje.focus();
            return false
        } else {
            document.querySelector("#error_mensaje").style.display = "none";
        }

        window.alert("Mensaje enviado con éxito");
        location.reload();
    });



});