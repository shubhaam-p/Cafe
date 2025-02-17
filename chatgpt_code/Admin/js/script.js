// Hardcoded credentials
const adminUser = {
    username: "admin",
    password: "admin123"
};

// Login Function
function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.innerText = "Please enter username and password.";
        return;
    }

    if (username === adminUser.username && password === adminUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "orders.html";
    } else {
        errorMessage.innerText = "Invalid credentials!";
    }
}
