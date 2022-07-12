export const addToFav = (state,favorite, setFavorite) => {
    const found = favorite.find((item)=> state.id === item.id)
    
    if(found === undefined) {
        setFavorite([...favorite, {...state,qty : 1}])
    }else {
        const index = favorite.indexOf(found)
        found.qty += 1 
        let copyFavItem = [...favorite]
        copyFavItem.splice(index, 1 ,found)
        setFavorite(copyFavItem)
    }
}