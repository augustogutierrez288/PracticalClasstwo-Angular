const people ={
    name: 'Augusto',
    surname: 'Gutierrez'
}

class Product{
    _id: number;
    _nameProduct: string;
    _price: number;
    _description: string;
    _category: string;

    constructor(
        id: number,
        nameProduct: string,
        price: number,
        description: string,
        category: string
    ){
        this._id = id;
        this._nameProduct = nameProduct;
        this._price = price;
        this._description = description;
        this._category = category;
    }
}

const auricularM10 = new Product(
    1,
    'Auricular Inalambrico M10',
    10900,
    'Esta es una descripcion por defecto.',
    'Auricular inalambrico'
);

const auricularM20 = new Product(
    2,
    'Auricular Inalambrico M20',
    14900,
    'Esta es una descripcion por defecto.',
    'Auricular inalambrico'
);

const auricularM30 = new Product(
    3,
    'Auricular Inalambrico M30',
    15900,
    'Esta es una descripcion por defecto.',
    'Auricular inalambrico'
);

class Cart{
    _products: Array<Product> = [];

    addProduct(product: Product){
        this._products.push(product);
    }
    deleteProduct(product: Product){
        this._products = this._products.filter(p => p._id !== product._id);
    }
}

class Ecommerce {
    
    _products: Array<Product> = [auricularM10, auricularM20, auricularM30];
    cart: Cart = new Cart();
  
    calculateTotal() {
      console.log(
        "El total es: $",
        this.cart._products.reduce((prev, next) => {
          return prev + next._price;
        }, 0)
      );
    }
  }
  
  const app = new Ecommerce();
  
  app.cart.addProduct(auricularM10);
  app.cart.addProduct(auricularM20);
  app.calculateTotal();