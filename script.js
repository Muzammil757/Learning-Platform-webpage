document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (email === "" || password === "") {
        errorMsg.textContent = "Please fill all fields!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMsg.textContent = "Enter a valid email!";
        return;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return;
    }

    if (email === "admin@gmail.com" && password === "123456") {
        alert("Login successful!");
        window.location.href = "courses.html";
    } else {
        errorMsg.textContent = "Invalid email or password!";
    }
});
