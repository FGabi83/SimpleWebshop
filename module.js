const UI = function () {
  this.Image = ".js-product-image";
  this.Name = ".js-product-name";
  this.Category = ".js-product-category";
  this.Description = ".js-product-description";
  this.Price = ".js-product-price";
  
  this.imageSelector = document.querySelector(this.Image);
  this.nameSelector = document.querySelector(this.Name);
  this.categorySelector = document.querySelector(this.Category);
  this.descriptionSelector = document.querySelector(this.Description);
  this.priceSelector = document.querySelector(this.Price);
};
    
  
    UI.prototype.setImage = function (src) {
      this.imageSelector.src = src;
    };
   UI.prototype.setName = function (name) {
      this.nameSelector.textContent = name;
    };
   UI.prototype.setCategory= function (category) {
     this.categorySelector.textContent = category;
    };
   UI.prototype.setDescription = function (description) {
     this.descriptionSelector.textContent = description;
    }; 
   UI.prototype.setPrice = function (price) {
     this.priceSelector.textContent = price;
    }; 
  


const Product = function () {
    this.name = "DisCatcher Target";
  this.category = " Discgolf";
  this.description =
    "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
  this.image = "images/discatcher.jpg";
  this.price = 399;
};
  
  Product.prototype.getImage = function () {
     return this.image;
    };
    Product.prototype.getName = function () {
      return this.name;
    };
    Product.prototype.getCategory = function () {
      return this.category;
    };
    Product.prototype.getDescription = function () {
      return `${this.name} is ${this.description}`;
    };
    Product.prototype.getPrice = function () {
      return `€${this.price}`;
    };
 
  
 const DiscgolfProduct = new Product(); 
  

const productImage = DiscgolfProduct.getImage();
const productName = DiscgolfProduct.getName();
const productCategory = DiscgolfProduct.getCategory();
const productDescription = DiscgolfProduct.getDescription();
const productPrice = DiscgolfProduct.getPrice();

const ShopUI = new UI(); 

ShopUI.setImage(productImage);
ShopUI.setName(productName);
ShopUI.setCategory(productCategory);
ShopUI.setDescription(productDescription);
ShopUI.setPrice(productPrice);
