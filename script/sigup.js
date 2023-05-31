document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        Number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("Password").value,
    
    }
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
})
