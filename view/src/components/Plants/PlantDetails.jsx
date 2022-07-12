import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BottomNav from '../bottomNav/BottomNav';
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import './PlantsDetailsStyle.css'
import Context from '../../context/MyContext';
import { addToCart } from '../helpers/addToCart';
import { addToFav } from '../helpers/addtoFav';



const PlantDetails = () => {
	const context = useContext(Context);
	const { cartItems, setCartItems ,favorite, setFavorite} = context
	const { state } = useLocation();
	

	
	const navigate = useNavigate()
	const handleBackOne = () => {
		navigate(-1)
	}

console.log(favorite, 'fav');
	return (
		<div className='plantsDetails-container'>
			<div className='head-box'>
				<button onClick={handleBackOne} className='backBtn'><MdIcons.MdOutlineArrowBackIosNew /></button>
				<h1 className='name'>{state.name}</h1>
			</div>
			<img src={state.imagUrl} alt="" />
			<p className='price'>€{state.price}</p>
			<p className='headline'>{state.headline}</p>
			<div className="btnDetails">
				<button onClick={() => addToCart(state, cartItems, setCartItems)} className='addToCart'>
					<span className='addtocarttext'>+ ADD TO CART</span>
					</button>
				<button onClick={() => addToFav(state, favorite, setFavorite)} className='addToFav'><AiIcons.AiOutlineHeart /></button>

					
			</div>
			<div className='description'>
				<span>Description</span>
				<p>{state.about}</p>
			</div>



			<div className="care">
				<h4 className='care-title'>Care</h4>
				<div className='care-box'>
					<div className='care-1'>
						<p className='care-info'>Toxic to Pets: </p>
						<p>{state.toxicToPets}</p>
					</div>
					<div className='care-1'>
						<p className='care-info'>Best Location:</p>
						<p>{state.BestLocation}</p>
					</div>
					<div className='care-1'>
						<p className='care-info'>Plant Nutrition:</p>
						<p>{state.plantNutrition}</p>
					</div>
					<div className='care-1'>
						<p className='care-info'>Repoting:</p>
						<p>{state.Repoting}</p>
					</div>
				</div>
			</div>
			<BottomNav />
		</div>
	)
}

export default PlantDetails;