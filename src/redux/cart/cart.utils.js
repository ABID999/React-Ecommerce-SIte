export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){

        return cartItems.map( item => (
            item.id === cartItemToAdd.id ? {...item, quantity: item.quantity+1} : item
            )
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};


export const increaseQuantity = (cartItems, itemToIncrease) =>{
    return cartItems.map( item =>(
        item.id === itemToIncrease.id 
        ?
        {...item, quantity: item.quantity +1 }
        :
        item
    ))
}

export const decreseQuantity = (cartItems, itemToDecrease) =>{
    return cartItems.map( item =>(
        item.id === itemToDecrease.id && item.quantity !== 1
        ?
        {...item, quantity: item.quantity -1 }
        :
        item
    ))
}

export const removeItem = (cartItems, itemToRemove) =>{
    return cartItems.filter( item=> item.id !== itemToRemove.id)
}