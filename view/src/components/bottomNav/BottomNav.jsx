import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import * as CgIcons from 'react-icons/cg'
import * as RiIcons from 'react-icons/ri'
import './BottomNavStyle.css'
import Context from '../../context/MyContext'
const BottomNav = () => {
  const context = useContext(Context);
  const {cartItems,handleLogOut,favorite} = context
  const counter = (array) =>{
    if(array.length === 0) return ''
    else return array.length
  }
  return (
    <div className='navigation'>
      <ul>
        <li>
          <NavLink to='/home'>
            <span className="icon"><AiIcons.AiOutlineHome size={30} /></span>
            <span className="text">Home</span>
          </NavLink>
        </li>
        <li>
        <NavLink to='/plants'>
            <span className="icon"><RiIcons.RiPlantLine size={30} /></span>
            <span className="text">Terrariums</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            <span className="icon"><BsIcons.BsCartPlus size={30} /></span>
            <span className='qtyNum'>{counter(cartItems)}</span>
            <span className="text">Cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/scanner'>
            <span className="icon camera"><AiIcons.AiOutlineCamera size={35} /></span>
            <span className="text">Scanner</span>
          </NavLink>
        </li>
        <li>
        <NavLink to='/favorites'>
            <span className="icon"><AiIcons.AiOutlineHeart size={30} /></span>
            <span className='qtyNum'>{counter(favorite)}</span>
            <span className="text">Favorites</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile'>
            <span className="icon"><CgIcons.CgProfile size={30} /></span>
            <span className="text">Profile</span>
          </NavLink>
        </li>
        <li>
          <button onClick={() => handleLogOut()} className="logOut">
            <span className="icon"><FiIcons.FiLogOut size={30} /></span>
          </button>
        </li>
        <div className='indicator'></div>
      </ul>
    </div>
  )
}

export default BottomNav