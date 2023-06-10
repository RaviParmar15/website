import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];
console.log("ertyuik");

let ui = ``;

let cartui = (products) => {
    console.log(products);

    products.map((product) => {


        console.log(product);

        // let img = document.createElement("img")
        // img.src = product.images[1];
        // let price = document.createElement("h5");
        // price.innerHTML = product.price;
        // let name = document.createElement("h3");
        // name.innerHTML = product.title;
        // let qty = document.createElement("p");
        // qty.innerHTML = product.qty;
        // let btn1 = document.createElement("button");
        // btn1.innerHTML = "-"
        // let btn2 = document.createElement("button");
        // btn2.innerHTML = "+"
        // let qtydiv = document.createElement("div");
        // qtydiv.append(btn1, qty, btn2);
        // let div = document.createElement("div");
        // div.append(img, name, price,qtydiv);
        // document.getElementById("parent").append(div);


        ui += `      <div class="cart">
          <div class="car-ui d-flex">
        <div class="img-box">
            <img src="${product.images[1]}" alt="">
        </div>
        <div class="content-box">
            <h1>${product.title}</h1>
            <p>very${product.description}</p>
            <span>Rating : ${product.rating}</span>
            <span>color : black</span>
            <h4>Price : ${product.price}</h4>
            <div class="qty-box ">
                <span class="plus"><i class="fa-sharp fa-solid fa-plus"></i></span><span class="qty">${product.qty}</span><span 
                    class="minus"><i class="fa-sharp fa-solid fa-minus"></i></span></p>
            </div>

        </div>
        </div>

    </div>`



    });

};

cartui(cartitem);
document.getElementById("parent").innerHTML = ui;

let total = 0;
cartitem.map((Element) => {
    total += Element.price * Element.qty;
})
document.getElementById("total").innerHTML = `total price :  ${total}`;


