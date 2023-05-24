// UI class for changing the user interface
class ProductUI {

  constructor (templateElement, parentElement) {
    
    
    this.productImageSelector = ".js-product-image";
    this.productNameSelector = ".js-product-name";
    this.productCategorySelector = ".js-product-category";
    this.productDescriptionSelector = ".js-product-description";
    this.productPriceSelector = ".js-product-price";
    
    
    this.node = templateElement.cloneNode(true);
    parentElement.appendChild(this.node);
      
      
    // using the selectors above, we store the elements in private variables
    this.productImageElement = this.node.querySelector(this.productImageSelector);
    this.productNameElement = this.node.querySelector(this.productNameSelector);
    this.productCategoryElement = this.node.querySelector(this.productCategorySelector);
    this.productDescriptionElement = this.node.querySelector(this.productDescriptionSelector);
    this.productPriceElement = this.node.querySelector(this.productPriceSelector);
  }

  // this is the API for our UI objects:
  // methods to change the UI by only changing the
  // content of the stored elements
  setProductImage (src) {
    this.productImageElement.src = src;
  }
  setProductName (name) {
    this.productNameElement.textContent = name;
  }
  setProductCategory (category) {
    this.productCategoryElement.textContent = category;
  }
  setProductDescription (description) {
    this.productDescriptionElement.textContent = description;
  }
  setProductPrice (price) {
    this.productPriceElement.textContent = price;
  }
  
  // method to setUp UI in one go
  
  setUp(productInfo) {
    this.productImageElement.src = productInfo.image;
    this.productNameElement.textContent = productInfo.name;
    this.productCategoryElement.textContent = productInfo.category;
    this.productDescriptionElement.textContent = productInfo.description;
    this.productPriceElement.textContent = productInfo.price;
  }
  
};

// Product class for gathering product related info
class Product {

  constructor (productInfo) {
    this.name = productInfo.name;
    this.category = productInfo.category;
    this.description = productInfo.description;
    this.imageSrc = productInfo.imageSrc;
    this.price = productInfo.price;
  }

  // API for Product objects for getting product info
  getName () {
    return this.name;
  }
  getCategory () {
    return this.category;
  }
  getDescription () {
    return `${this.name} is ${this.description}.`;
  }
  getImage () {
    return this.imageSrc;
  }
  getPrice () {
    return `€${this.price}`;
  }
  
  //API for getting product info in one go
  
  getInfo() {
    return {
     name : this.name,
     category: this.category,
     description :`${this.name} is ${this.description}`,
     image : this.imageSrc,
     price : `€${this.price}`
    };
  }
};


// set up first product
const DiscgolfProduct = new Product({
  name: "DisCatcher Target",
  category: " Discgolf",
  description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
  imageSrc: "images/discatcher.jpg",
  price: 399
});


const productInfo = DiscgolfProduct.getInfo();


// set up first product on the UI
const UITemplate = document.querySelector(".js-product");
const ProductListElement = document.querySelector(".js-product-list");
const ShopUI = new ProductUI(UITemplate, ProductListElement);

ShopUI.setUp(productInfo);

//set up second product

const DiscgolfProduct2 = new Product({
  name: "Hero SuperAero",
  category: " Discgolf",
  description: "a disc that floats like a butterfly, holds up like a SuperHero",
  imageSrc: "images/dog.jpg",
  price: 14
});

const productInfo2 = DiscgolfProduct2.getInfo();

//set up second product on the UI

const ShopUI2 = new ProductUI(UITemplate, ProductListElement);

ShopUI2.setUp(productInfo2);

UITemplate.remove();

