const getStoredCart = () => {
  const storedCartStr =  localStorage.getItem('cart');
  if(storedCartStr){
   return JSON.parse(storedCartStr)
  }
  return []
}

const SaveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}

const addToLS = data =>{
    const cart = getStoredCart();
    cart.push(data);

    // Save to Local Storage
    SaveCartToLS(cart)
}

const removeFromLS = id =>{
  const cart = getStoredCart();
  const remainingCart = cart.filter(bottlesId => bottlesId !== id)
  // remaining item sent local storage
  SaveCartToLS(remainingCart)
}

export {addToLS,getStoredCart,removeFromLS}