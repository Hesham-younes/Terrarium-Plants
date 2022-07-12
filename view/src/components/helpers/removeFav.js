export const removeFav = (PlantsData,favorite,setFavorite) => {

    const found = favorite.find((item) => item.id === PlantsData.id)

    const index = favorite.indexOf(found)

    let copyfavorite = [...favorite]

    copyfavorite.splice(index,1)
    
    setFavorite(copyfavorite)
        
}