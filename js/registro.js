function limpiarErrores() {
    var errores = document.getElementsByClassName("error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}

function validar(formulario) {

    limpiarErrores();

    if (formulario.nombres.value.trim().length == 0) {
        document.getElementById("errornombres").innerText = "Campo obligatorio";
        formulario.nombres.focus();
        return false;
    }

    if (formulario.nombres.value.trim().length < 3) {
        document.getElementById("errornombres").innerText = "Campo inválido";
        formulario.nombres.focus();
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText = "Campo inválido";
        formulario.email.focus();
        return false;
    }

    if (formulario.contrasena.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText = "Campo obligatorio";
        formulario.contrasena.focus();
        return false;
    }

    if (formulario.contrasena.value.trim().length < 6) {
        document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 6 caracteres)";
        formulario.contrasena.focus();
        return false;
    }

    if (formulario.contrasena.value != formulario.confirmacion.value) {
        document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
        formulario.confirmacion.focus();
        return false;
    }

    if (formulario.tipo.value == "") {
        document.getElementById("errorTipo").innerText = "Campo obligatorio";
        formulario.tipo.focus();
        return false;
    }

    if (!formulario.acepto.checked) {
        document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
        formulario.acepto.focus();
        return false;
    }

    alert("Datos enviados");

    return true;
}