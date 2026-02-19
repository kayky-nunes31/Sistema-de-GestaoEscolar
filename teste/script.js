function validate() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        message.innerText = "E-mail inválido!";
        message.style.color = "red";
    } else if (password.length < 6) {
        message.innerText = "Senha deve ter no mínimo 6 caracteres!";
        message.style.color = "red";
    } else {
        message.innerText = "Login válido!";
        message.style.color = "green";
    }
}

function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}