import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/MyContext'
import BottomNav from '../bottomNav/BottomNav'
import { removeFav } from '../helpers/removeFav'
import './favstyle.css'
const Favorites = () => {
  const context = useContext(Context);
  const { favorite, setFavorite } = context

  return ( 
    <div className='container'>
      <h1 className='fav'>Favorites</h1>
      <div className="fav-items">
        {favorite.length === 0 && <div className='empty-fav'>List is Empty!</div>}
        {favorite.map((item) => {
          return (
            <li key={item.id} className='fav-list'>

              <div className='image-div'>
              <Link  to={`/plantDetails`} state={item}>
              <img className='image' src={item.imagUrl} alt="" />
              </Link>
              </div>

              <div className="fav-name-box">
                <div className='fav-item-box'>
                  <p className='item-name'>{item.name}</p>
                </div>
                <div className='fav-btnHolder'>
                  <button className='fav-btn' onClick={() => removeFav(item, favorite, setFavorite)}>Remove item</button>
                </div>
              </div>
            </li>
          )
        })}
      </div>
      <BottomNav />
    </div>
  )
}

export default Favorites