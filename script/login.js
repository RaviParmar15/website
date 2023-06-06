import navbar from "../components/navbar.js";
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    if (email == user.email && password == user.password) {
        alert("login success");
        localStorage.setItem("loggedIn", true);
        window.location.href = "/index.html";

    } else if (email == user.email && password !== user.password) {
        alert("invalid password");
        localStorage.setItem("loggedIn", false);

    }else{
        alert("invalid email");
        localStorage.setItem("loggedIn", false);

    }
});
document.getElementById("navbar").innerHTML=navbar();
// console.log(navbar);
