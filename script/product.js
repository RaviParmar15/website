import navbar from "../components/navbar.js"

let data = async () => {
    let response = await fetch("https://dummyjson.com/products")
    let data = await response.json()
    displya(data.products);


}
data()

const displya = (data) => {

    data.map((Element) => {
        let img = document.createElement("img");
        img.src = Element.images[1];
        let title = document.createElement("h3");
        title.innerHTML = Element.title;
        let price = document.createElement("p");
        price.innerHTML = Element.price;
        let description = document.createElement("p");
        description.innerHTML = Element.description;
        let brand = document.createElement("span");
        brand.innerHTML = Element.brand;
        let rating = document.createElement("h6");
        rating.innerHTML = Element.rating;
        let category = document.createElement("p");
        category.innerHTML = Element.category;
        let btn1 = document.createElement("button");
        btn1.innerHTML = "Add to cart";
        btn1.addEventListener("click", () => {
            let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];
            let existing = false;

            cartitem.map((item, idx) => {
                if (item.id == Element.id) {
                    existing = true;
                    cartitem[idx].qty += 1;
                }
            });
            if (!existing) {
                cartitem.push({ ...Element, qty: 1 });
                alert("product added");
            } else {
                
            }



            localStorage.setItem("cartitem", JSON.stringify(cartitem));

        });
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Buy Now";
        btn1.style.marginBottom = "10px";
        let div = document.createElement("div");

        div.append(img, title, price, description, brand, rating, category, btn1, btn2);
        document.querySelector(".box2").append(div);

    });
};
document.getElementById("navbar").innerHTML = navbar();
