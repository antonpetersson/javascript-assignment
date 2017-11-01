/* GLOBAL VARIABLES */
var listOfProducts;



// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    var main = document.getElementById("main");
    main.className = "mainClass";

    //Looping through listOfProducts and adding products to main div
    for(var i = 0; i < listOfProducts.length; i++){
        var product = createProduct(listOfProducts[i]);
        main.appendChild(product);
       
    }
    //showing main in body.
    

}

//Creating function that pulls the products and adding..
function createProduct(listOfProducts) {
    var product = document.createElement("div")
    product.className = "productClass";

    //.. title
    var getTitle = document.createElement("h1");
    getTitle.innerText = listOfProducts.title;
    product.appendChild(getTitle);

    //.. description
    var getDescription = document.createElement("h2");
    getDescription.innerText = listOfProducts.description;
    product.appendChild(getDescription);

    //.. image
    var getImage = document.createElement("img");
    getImage.src = "img/" + listOfProducts.image;
    product.appendChild(getImage);

    //.. price
    var GetPrice = document.createElement("p");
    GetPrice.innerText = listOfProducts.price + " kr";
    product.appendChild(GetPrice);

    //.. an "add to cart" button.
    var addCart = document.createElement("button")
    
    addCart.innerText = "Lägg till i kundvagnen";
    product.appendChild(addCart);
    


    
    


    //returning what to function created out from the function
    return product;

}
