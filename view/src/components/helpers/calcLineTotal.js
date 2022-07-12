const lineTotals = (cartItem) => {
    console.log(cartItem);
    const cartLineTotals = [...cartItem]
    return cartLineTotals.map((item) => item.qty * item.price)
}

export default lineTotals