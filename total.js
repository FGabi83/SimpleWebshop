(function(){
  
  
  class TotalView {
   
    constructor(element) {
      
      this.container = element;
      /*this.priceSelector = ".js-price";
      this.priceElement = this.node.querySelector(this.priceSelector);*/
      PubSub.subscribe("updateCart", (products) => this.updateTotal(products));
    }

    /*_trimPrice(productData){
      let text = this.priceElement.innerHTML;
      this.priceElement = text.replace("€", "");
    }*/
    _rowTotal(productData) {
      
      return `<tr><td class="js-price">${productData.price}</td></tr>`;
    }

    
    _buildTotalHTML(productList) {
      let totalContent = "";
      for (const product of productList) {
        totalContent += this._rowTotal(product)
      }
      return totalContent;
    }

    
    updateTotal(products) {
      this.container.innerHTML = this._buildTotalHTML(products);
    }
  }

  // this way the other JS files can also use this class
  window.TotalView = TotalView;
  
  class TotalModel {
    constructor(){
      this.items = items;
      
      
      PubSub.subscribe('addToCart', (item) => this.addItem(item))
    }
    
    // API for Total object
    addItem(item) {
      this.items.push(item);
      PubSub.publish("updateCart", this.getItems());
     
      
    }
    getItems() {
      return this.items;
    }
  }
  
 
  
  /*function setTotalPrice () {
  totalPrice.textContent = `Total price is `;
  };*/
 
  window.TotalModel = TotalModel
 
})();

