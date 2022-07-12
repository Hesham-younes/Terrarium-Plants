export const reduceQuantity = (PlantData,cartItems,setCartItems) => {
    const found = cartItems.find(item => item.id === PlantData.id)

    const index = cartItems.indexOf(found)

    found.qty -=1;

    let copyCartItems = [...cartItems]
    found.qty >= 1
    ? copyCartItems.splice(index, 1 , found )
    : copyCartItems.splice(index, 1)
    
    
    setCartItems(copyCartItems)

}