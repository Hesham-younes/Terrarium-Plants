export const addToCart = (state,cartItems, setCartItems) => {
    const found = cartItems.find((item)=> state.id === item.id)
    
    if(found === undefined) {
        setCartItems([...cartItems, {...state,qty : 1}])
    }else {
        const index = cartItems.indexOf(found)
        found.qty += 1 
        let copyCartItem = [...cartItems]
        copyCartItem.splice(index, 1 ,found)
        setCartItems(copyCartItem)
        
    }
}