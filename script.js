(function() {
  
  class ShopController {
    
    constuctor(productList){
      this.productList = productList;
      this.UITemplate = document.querySelector(".js-product");
      this.ProductListElement = document.querySelector(".js-product-list");
      this.UITemplate.remove();
      for (let product of this.productList) {
        this._initProduct(product);
      }
      
      this.cartContainer = document.querySelector(".js-cart");
      this.cartUI = new CartUI(this.cartContainer);
      this.cart = new Cart();
      
    }
 
    _initProduct(productData){
      const newProduct = new Product(productData);
      const productInfo = newProduct.getInfo();
      const newProductUI = new ProductUI(this.UITemplate, this.ProductListElement);
      newProductUI.setUp(productInfo);
    }
  }


  
//productList

const productList = [

  {
    name: "DisCatcher Target",
    category: " Discgolf",
    description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
    imageSrc: "images/discatcher.jpg",
    price: 399
  },
  {
    name: "Hero SuperAero",
    category: " Discgolf",
    description: "a disc that floats like a butterfly, holds up like a SuperHero",
    imageSrc: "images/dog.jpg",
    price: 14
  },
];

// launch shop initialization by creating a new ShopController instance
  const berryShop = new ShopController(productList);


  
})();