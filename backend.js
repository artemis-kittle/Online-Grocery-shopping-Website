import { selectedcategorymenu, selectedcategory } from './database.js'



let catalogue = selectedcategorymenu;
let productlineup = selectedcategory;
let selectedproducts = {};

//     document.addEventListener('DOMContentLoaded', function() {
// 	  var menuButton = document.getElementById('cart-button');
// 	  var menuContainer = document.getElementById('cartdialoguebox');

// 	menuButton.addEventListener('click', function() {
// 		menuContainer.classList.toggle('open');
// 	});
// });

var addedtocart = document.getElementById('addedtocart');
var checkout = document.getElementById('checkout');
var amount = document.getElementById('amount');


const iscartmt = () => {
  if (Object.keys(selectedproducts).length === 0) {
    addedtocart.innerHTML = `<p style="padding-bottom: 8px;">Cart is empty</p>`;
    checkout.disabled = true;
    checkout.classList.add('disabled');
    amount.innerHTML = `<div><p style="font-size: 18px;">Total</p>
      <p style="font-size: 16px;">$${0}</p></div>`;
  } 
  else {
    checkout.disabled = false;
    checkout.classList.remove('disabled');
    const total = Object.keys(selectedproducts).reduce((accumulator, this) => {
      const product = findProductById(this);
      accumulator += product.price * selectedproducts[this];
      return accumulator
    }, 0);

    amount.innerHTML = `<div"><p style="font-size: 18px;">Total</p>
      <p style="font-size: 16px;">$${total}</p></div>`;
  }
}
//This code block sets up an event listener using the window.onload method, which triggers a function to be executed when the web page has finished loading.
//It also ensures that any user selections made during a previous session are saved to local storage for future use.
window.onload = () => {
  if (localStorage.getItem('productList')) {//checks whether a value with the key 'productList' is available in the local storage. 
    catalogue = JSON.parse(localStorage.getItem('productList'));
  } else {//If it is not available, the program assigns the default value of productList to catalogue and saves it to local storage using localStorage.setItem().
    catalogue = productList;
    localStorage.setItem('productList', JSON.stringify(catalogue));
  }

  if (localStorage.getItem('productCategoryList')) {//checks whether a value with the key 'productCategoryList' is available in the local storage.
    productlineup = JSON.parse(localStorage.getItem('productCategoryList'))
  } else {//If it is not available, the program assigns the default value of productCategoryList to productlineup and saves it to local storage.
    productlineup = productCategoryList;
    localStorage.setItem('productCategoryList', JSON.stringify(productlineup));
  }

  if (localStorage.getItem('carts')) {//checks whether a value with the key 'carts' is available in the local storage. 
    selectedproducts = JSON.parse(localStorage.getItem('carts'));
  } else {//If it is not available, the program assigns an empty object to selectedproducts and saves it to local storage.
    selectedproducts = {};
    localStorage.setItem('carts', JSON.stringify(selectedproducts));
  }

  iscartmt();

  const menu = document.getElementById('menu');

  productlineup.forEach((toplevelcategory) => {////for constructing a link element that will be added to the side navigation menu.
    menu.innerHTML += constructSidenavLink(toplevelcategory);////unordered list or a similar element that will serve as the container for the side navigation menu.
  })



  productlineup.forEach((toplevelcategory) => {
    const leftnavigation = document.getElementById(`sidenav-link-[${toplevelcategory.id}]`);
    leftnavigation.addEventListener('mouseover', function () {
      leftnavigation.getElementsByClassName('inner-container')[0].style.display = "block";
    })
    leftnavigation.addEventListener('click', function () {
      leftnavigation.getElementsByClassName('inner-container')[0].style.display = "block";
    })//The mouseover and click events set the CSS display property of the first child element of the sidenav link with class inner-container to 'block', making it visible. 
    leftnavigation.addEventListener('mouseout', function () {
      leftnavigation.getElementsByClassName('inner-container')[0].style.display = "none";
    })//The mouseout event sets the display property back to 'none', making it hidden again.
    toplevelcategory.subcategories.forEach((subcategory) => {
      const atleftnavigation = document.getElementById(`sub-link-[${subcategory.id}]`);//filters the catalogue array to retrieve an array of products that belong to the current subcategory. 
      const products = catalogue.filter(product => product.subcategoryId === subcategory.id);
      if (products.length === 0) {//the color of the subcategory link is changed to a darker shade of grey to indicate that it is not clickable.
        atleftnavigation.style.color = "#44403c";
      }
      atleftnavigation.addEventListener('click', () => filtercatalogue(subcategory.id))//loads the relevant products onto the page for the user to view.
    })
  })
}

const mtcart = () => {//learing the contents of the shopping cart
  selectedproducts = {};
  localStorage.setItem('carts', JSON.stringify(selectedproducts));
  iscartmt();//cart is now empty.
}
var clearcart = document.getElementById('clearcart');
clearcart.addEventListener('click', mtcart)

/*
The product card contains the following elements:

An image element that displays the product's image.
A content section that displays the product's name, price, quantity, and stock status.
A button that can be used to add the product to the shopping cart.
ternary operator is used to specify whether the product is in stock or not
*/

const createitem = (product) => {
  return `
    <div id="product-[${product.id}]" class="eachitem">
      <img src="${product.imageLink}" class="image">
      <div class="content">
        <h3 >${product.name}</h3>
        <p>$${product.price}</p> 
        <div>${product.quantity > 0 ? `<p class="in-stock">In Stock</p>` : `<p class="out-stock">Out of Stock</p>`} 
          <p">${product.quantity} items</p>
        </div>
        <button class="button${product.quantity === 0 ? ' disabled' : ''}>Add to Cart</button>
      </div>
    </div>
  `
}

const addtocart = (product) => {
  const id = product.id;
  if (Object.keys(selectedproducts).length === 0) {
    selectedproducts[id] = 1;//checks if the selectedproducts object is empty. If it is, it adds the id of the product to the selectedproducts object with a value of 1.
  } else {//checks if the id of the product is already in the selectedproducts object.
    if (id in selectedproducts) {
      if (selectedproducts[id] < 20 && selectedproducts[id] < product.quantity) {// checks if the quantity of the product in the cart is less than 20 and less than the available stock of the product.
        selectedproducts[id] += 1;//increments the value of the id key in the selectedproducts object by 1.
        alert(` ${product.name} has been added to the cart!`) ////alert message saying that the product has been added to the cart.
      } else {////displays an alert message saying that the item purchase limit has been reached.
        alert(`Item purchase limit reached !!`)
      }
    } else {//alert message saying that the product has been added to the cart.
      selectedproducts[id] = 1;
      alert(` ${product.name} has been added to the cart!`)
    }
  }

/*
By storing the cart data in localStorage, the user's shopping cart will persist even 
if they leave the website or close their browser. This allows the user to come back 
to their cart later and continue shopping without losing their items.
*/
  localStorage.setItem('carts', JSON.stringify(selectedproducts));
}

const findProductById = (productId) => {//earches through the catalogue array to find the product object that has the matching id. 
  const product = catalogue.find(product => product.id === productId);
  return product;
};

// const removefromcart = (product) => {
//   const id = product.id;
//   if (Object.keys(selectedproducts).length === 0) {
//     selectedproducts[id] = 1;
//   } else {
//     if (id in selectedproducts) {
//       if (selectedproducts[id] >= 1) {
//         selectedproducts[id] -= 1;
//         alert(`1 item of ${product.name} has been removed from the cart!`)
//       }
//     }
//   }

  const removefromcart = (product) => {//check if the product is already in the cart by checking if its id 
    const id = product.id;
    if (id in selectedproducts) {
      if (selectedproducts[id] > 0) {//check if its quantity is greater than 0 (since we don't want to reduce the quantity below 0).
        selectedproducts[id] -= 1;
        alert(`1 item of ${product.name} has been removed from the cart!`);//decrement the quantity by 1 and show an alert
      }
    }
    localStorage.setItem('carts', JSON.stringify(selectedproducts));//update the local storage 
  }

  if (selectedproducts[id] === 0) {//delete keyword is used to remove the product ID and its quantity from the selectedproducts object.
    delete selectedproducts[id];
  }
  localStorage.setItem('carts', JSON.stringify(selectedproducts));

const allproducts = document.getElementById('allproducts');

const generatehtml = (products) => {
  allproducts.innerHTML = "";// clear the container element
  products.forEach((product) => {// iterate over each product in the array
    allproducts.innerHTML += createitem(product);// generate the HTML code for the product using the createitem function
  })

  products.forEach((product) => {//iterates through an array of product objects and adds a "click" event listener to the "Add to Cart" button for each product card. 
    const productCardRef = document.getElementById(`product-[${product.id}]`);
    const addButtonProductCardRef = productCardRef.getElementsByClassName('button')[0];
    addButtonProductCardRef.addEventListener('click', () => addtocart(product));//"Add to Cart" button is clicked, the addtocart() function is called with the corresponding product object as its argument.
  })
}

const filtercatalogue = (subcategoryId) => {//filter the products in the catalogue array to display only those products belonging to the specified subcategory
  const products = catalogue.filter(product => product.subcategoryId === subcategoryId);
  if (products.length === 0)
    alert('Product of this subcategory is empty!');//filter the products in the catalogue array to display only those products belonging to the specified subcategory
  else {//otherwise calls the generatehtml function to generate HTML markup
    generatehtml(products);
  }
};
const searchtopbar = document.getElementById('topbar');

const filterquery = (e) => {
  e.preventDefault();//prevents the default form submission behavior 
  const search = new FormData(searchtopbar);
//filters the products in the catalogue array based on the search queries and price range filters.
  const searchquery = search.get('filter-name').toLowerCase().split(' ');//splits the search queries into an array of individual queries using split(' ') and converts them to lowercase using toLowerCase(). It then checks if each individual query is included in the name of the product using includes(). It also checks if the price of the product is within the price range filters set by the user.
  const minimum = Number(search.get('filter-min-price'));
  const maximum = Number(search.get('filter-max-price'));
  
  const products = catalogue.filter((product) => {
    const isPartOfQueries = searchquery.map(query =>
      product.name.toLowerCase().includes(query)).reduce((a, b) => a + b, 0) === searchquery.length;

    const more = product.price >= minimum;
    const less = product.price <= maximum;

    if (minimum === 0 && maximum === 0) {
      return withinquery;
    }
    else if (minimum === 0) {
      return withinquery && less;
    } else if (maximum === 0) {
      return withinquery && more;
    }

    return withinquery && more && less;
  })

  generatehtml(products);//calls the generatehtml function and passes the filtered products as an argument to display the search results on the webpage.
};

searchtopbar.addEventListener('submit', filterquery);//loads products based on search queries



const createcart = (product) => {//crete layout for cart
  if (product) {
    return `
      <div id="cart-item-${product.id}>
          <img src="${product.imageLink}">
          <div>
            <p>${product.name}</p>
            <p id="cart-item-price-${product.id}">$${product.price} x <span style="font-weight: 500;">${selectedproducts[product.id]}</span> items = $${product.price * selectedproducts[product.id]}</p>
          </div>  
        <div>
          <button class="cart-button cart-quantity-button" >+</button>  
          <button class="cart-button cart-quantity-button">-</button>    
        </div>
      </div>
    `;
  }

  return "";
}
const viewcart = document.getElementById('viewcart');
const updatecart = (product) => {//updates the cart item in the DOM with the latest product details 
  const cartitem = document.getElementById(`cart-item-${product.id}`);
  const cartItemPriceRef = document.getElementById(`cart-item-price-${product.id}`);//updates the price of the product in the cart based on the latest quantity using string interpolation.
  cartItemPriceRef.innerHTML = `<p id="cart-item-price">$${product.price} x <span style="font-weight: 500;">${selectedproducts[product.id]}</span> items = $${product.price * selectedproducts[product.id]}</p>`
  if (!Object.keys(selectedproducts).includes(product.id)) {
    cartitem.remove();//product has been removed from the cart, so the cart item is removed from the DOM using the remove method.
  }

  iscartmt();//if the cart is empty and hide/show the relevant elements accordingly.
}

const createcartlist = () => {//responsible for generating and rendering the HTML elements for the items in the cart.
  addedtocart.innerHTML = "";

  Object.keys(selectedproducts).forEach(productId => {//loops through each product in the selectedproducts object and checks if the value of the product is greater than 0. If it is, it generates the HTML for the product using the createcart function and appends it to the addedtocart element.
    const product = findProductById(productId);

    if (selectedproducts[product.id] > 0) {
      addedtocart.innerHTML += createcart(product);
    }
  })

  Object.keys(selectedproducts).forEach(productId => {//loops through each product in the selectedproducts object again to attach event listeners to the "add" and "remove" buttons for each item in the cart. 

    if (selectedproducts[productId] > 0) {
      const cartitem = document.getElementById(`cart-item-${productId}`);
      const cartButtons = cartitem.getElementsByClassName('cart-button');

      const addItemButton = cartButtons[0];
      const removeItemButton = cartButtons[1];

      const product = findProductById(productId);

      addItemButton.addEventListener('click', () => {
        addtocart(product);//When the "add" button is clicked, it calls the addtocart function and updates the cart
        updatecart(product);//updates the cart using the updatecart function.
      })
      removeItemButton.addEventListener('click', () => {
        removefromcart(product);//calls the removefromcart function and updates the cart using the updatecart function.
        updatecart(product);
      })
    }
  })
}
var opencart = document.getElementById('cartdialoguebox');

const opencart = () => {//open cart
  document.getElementById('cartdialoguebox').classList.toggle('open');
  opencart.style.display = "flex";
  createcartlist();

  iscartmt();
}

const shutcart = () => {//close cart
  opencart.style.display = "none";
}
var closecart = document.getElementById('cartdialogueback');
viewcart.addEventListener('click', opencart);
closecart.addEventListener('click', shutcart);

var openorder = document.getElementById('orderdialoguebox');
const openorderform = () => {
  openorder.style.display = "flex";
}

const closeorderform = () => {
  openorder.style.display = "none";
}

const controlcheckout = () => {
  closeCartPopUp();
  openorderform();

  const total = Object.keys(selectedproducts).reduce((accumulator, this) => {
      const product = findProductById(this);
      accumulator += product.price * selectedproducts[this];
      return accumulator
    }, 0);
  var ordercompletion = document.getElementById('ordercompletion');
  const currentContent = ordercompletion.innerHTML;

  ordercompletion.innerHTML = "";

  ordercompletion.innerHTML = `<div ><p style="font-size: 18px;">Total</p><p style="font-size: 18px;">$${total}</p>
  </div>` + currentContent;
}
var closeorder = document.getElementById("orderdialogueback");

checkout.addEventListener('click', controlcheckout);

closeorder.addEventListener('click', closeorderform);

var ordercompletionform = document.getElementById('ordercompletionform');

ordercompletionform.addEventListener('submit', (e) => {
  e.preventDefault();

  const orderData = new FormData(ordercompletionform);

  localStorage.setItem('productList', JSON.stringify(catalogue));//updatelocalstorage

  alert(`Order receipt vide order id : 9785641 by ${orderData.get('name')} has been sent to ${orderData.get('email')}. Your order will be delivered shortly!`)//final alert for confirmation

  mtcart();//clear cart for next order
  closeOrderForm();//closeorderform

  window.location.reload();//reload again
})