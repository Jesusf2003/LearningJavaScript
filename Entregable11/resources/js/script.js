function go() {
    if (
        document.form.password.value == "1234" &&
        document.form.login.value == "user"
    ) {
        document.form.submit();
    } else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}

function setfocus() {
    document.forms[0].login.select();
    document.forms[0].login.focus();
}