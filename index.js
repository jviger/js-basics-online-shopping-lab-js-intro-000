var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your coherede 
 var price = Math.floor(Math.random() * 100 + 1);
 var itemObject = { itemName: item, itemPrice: price};
 
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length < 1){
  return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
