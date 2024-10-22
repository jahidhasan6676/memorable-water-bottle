// local storage get cart item-->
const getStoredCart = ()=>{
    const getStored = localStorage.getItem("cart");
    if(getStored){
        return JSON.parse(getStored)
    }
    return [];
}

// save new item-->
const saveCartToLs = (cart) =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)
}

// set new item-->
const addToLs = (id) =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLs(cart);

}


const removeFromLs = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLs(remaining)
}

export {addToLs, getStoredCart, removeFromLs}