function login() {
    if ($("#username").val() == "admin" && $("#password").val() == "password") {
        alert("Eres un usuario válido");
        let url = "views/Principal.html";
        $(location).attr('href', url);
    } else {
        alert("No eres un usuario válido");
    }
}