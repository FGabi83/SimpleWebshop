const UI = (() => {
  const Image = ".js-product-image";
  const Name = ".js-product-name";
  const Category = ".js-product-category";
  const Description = ".js-product-description";
  const Price = ".js-product-price";
  
  const imageSelector = document.querySelector(Image);
  const nameSelector = document.querySelector(Name);
  const categorySelector = document.querySelector(Category);
  const descriptionSelector = document.querySelector(Description);
  const priceSelector = document.querySelector(Price);
  
    
  return {
    setImage: (src) => {
      imageSelector.src = src;
    },
   setName: (name) => {
      nameSelector.textContent = name;
    },
   setCategory: (category) => {
     categorySelector.textContent = category;
    },
   setDescription: (description) => {
     descriptionSelector.textContent = description;
    }, 
   setPrice: (price) => {
     priceSelector.textContent = price;
    }, 
  };
})();

const Product = (() => {
  const image = "images/discatcher.jpg";
  const name = "DisCatcher Target";
  const category = "Discgolf";
  const description = "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
  const price = 399;
  
  
  return {
    getImage: () => {
     return image;
    },
    getName: () => {
      return name;
    },
    getCategory: () => {
      return category;
    },
    getDescription: () => {
      return `${name} is ${description}`;
    },
    getPrice: () => {
      return `€${price}`;
    },
  }
})();

const productImage = Product.getImage();
const productName = Product.getName();
const productCategory = Product.getCategory();
const productDescription = Product.getDescription();
const productPrice = Product.getPrice();

UI.setImage(productImage);
UI.setName(productName);
UI.setCategory(productCategory);
UI.setDescription(productDescription);
UI.setPrice(productPrice);
