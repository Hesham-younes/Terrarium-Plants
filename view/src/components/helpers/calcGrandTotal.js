const calculateGrandTotal = (cartItems) => {
    return cartItems.reduce((acc, item) =>  acc + (item.price * item.qty),0 )
}


export default calculateGrandTotal