var cart = []; 

// console.log(price);
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code 
 var price = Math.floor(Math.random() * 100);
 var itemObj = {itemName: item, itemPrice: price};
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    return 'Your shopping cart is empty.';
  }else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else{
    var message = "In your cart, you have ";
    var lastItem = cart.length -1;
    for(var i = 0; i < lastItem; i++){
      message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    message += `and ${cart[lastItem].itemName} at $${cart[lastItem].itemPrice}.`
    return message;
  }
}

function total() {
  // write your code here
  console.log(cart);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
