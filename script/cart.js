import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];

let cartui = (products) => {
    products.map((product) => {

        let img = document.createElement("img")
        img.src = product.images[1];
        let price = document.createElement("h5");
        price.innerHTML = product.price;
        let name = document.createElement("h3");
        name.innerHTML = product.title;
        let qty = document.createElement("p");
        qty.innerHTML = product.qty;
        let btn1 = document.createElement("button");
        btn1.innerHTML = "-"
        let btn2 = document.createElement("button");
        btn2.innerHTML = "+"
        let qtydiv = document.createElement("div");
        qtydiv.append(btn1, qty, btn2);
        let div = document.createElement("div");
        div.append(img, name, price,qtydiv);
        document.getElementById("cart").append(div);


    });

}