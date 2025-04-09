var Product = /** @class */ (function () {
    function Product(id, nameProduct, price, description, category, start, img) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.category = category;
        this.stars = start;
        this.img = img;
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        var counterCart = document.getElementById("counter-cart");
        if (!counterCart)
            throw new Error("Elemento counter-cart no encontrado");
        this.products.push(product);
        counterCart.textContent = this.products.length.toString();
    };
    Cart.prototype.deleteProduct = function (product) {
        var counterCart = document.getElementById("counter-cart");
        if (!counterCart)
            throw new Error("Elemento counter-cart no encontrado");
        this.products = this.products.filter(function (p) { return p.id !== product.id; });
        counterCart.textContent = this.products.length.toString();
    };
    return Cart;
}());
var Ecommerce = /** @class */ (function () {
    function Ecommerce(products) {
        this.products = products;
        this.cart = new Cart();
    }
    Ecommerce.prototype.paintProduct = function () {
        var _this = this;
        var parentContainer = document.getElementById("parent-container");
        if (!parentContainer)
            throw new Error("Elemento parent-container no encontrado");
        parentContainer.innerHTML = " ";
        this.products.forEach(function (product) {
            var container = document.createElement("article");
            container.classList.add("col", "mb-5");
            container.innerHTML =
                "\n                <article class=\"card h-100\">\n                    <!-- Product image-->\n                    <img class=\"card-img-top\" src=\"".concat(product.img, "\" alt=\"").concat(product.nameProduct, "\" />\n                    <!-- Product details-->\n                    <div class=\"card-body p-4\">\n                        <div class=\"text-center\">\n                            <!-- Product name-->\n                            <h5 class=\"fw-bolder\">").concat(product.nameProduct, "</h5>\n                            <!-- Product price-->\n                            ").concat(product.price, "\n                        </div>\n                    </div>\n                    <!-- Product actions-->\n                    <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\n                        <div class=\"text-center\">\n                            <button class=\"btn btn-outline-dark mt-auto\" id=\"").concat(product.id, "\">Agregar al carrito</button>\n                        </div>\n                    </div>\n                </article>\n            ");
            parentContainer.appendChild(container);
            var button = document.getElementById(product.id);
            if (!button)
                throw new Error("El boton con id ".concat(product.id, " no encontrado"));
            button.addEventListener("click", function () {
                var productFound = _this.products.find(function (p) { return p.id === product.id; });
                _this.cart.addProduct(productFound);
            });
        });
    };
    return Ecommerce;
}());
var AuricularM10 = new Product("1", "Auricular Inalambrico M10", 12499, "Esta es una descripcion cualquiera", "Auriculares Inalambricos", 5, "./src/assets/img/AuricularM10.png");
var AuricularTWSF9 = new Product("2", "Auricular Inalambrico F9 5.3v", 14499, "Esta es una descripcion cualquiera", "Auriculares Inalambricos", 3, "./src/assets/img/AuricularF9.png");
var SamsungAKG = new Product("3", "Auricular In-Ear Samsung AKG USB-C", 15499, "Esta es una descripcion cualquiera", "Auriculares Inalambricos", 4, "./src/assets/img/SamsungAKG.png");
var AuricularA6s = new Product("4", "Auricular Inalambricos Wireless A6s", 15499, "Esta es una descripcion cualquiera", "Auriculares Inalambricos", 3, "./src/assets/img/AuricularA6s.png");
var AuricularSamsung = new Product("5", "Auricular In-Ear Samsung Clasico Original", 37499, "Esta es una descripcion cualquiera", "Auriculares Inalambricos", 5, "./src/assets/img/SamsungBlancos.png");
var AuricularP9 = new Product("6", "Auricular Inalambricos Vincha P9", 38499, "Esta es una descripcion cualquiera", "Auriculares Inalambricos", 5, "./src/assets/img/AuricularP9.png");
var products = [AuricularM10, AuricularTWSF9, AuricularSamsung, AuricularP9, SamsungAKG, AuricularA6s];
var appEcommerce = new Ecommerce(products);
appEcommerce.paintProduct();
