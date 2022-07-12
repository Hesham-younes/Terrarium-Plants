import React, { useContext } from 'react'
import Context from '../../context/MyContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import profile_img from "../../assets/profiledefault.png"
import BottomNav from '../bottomNav/BottomNav';
import './profile.css';
import { Link } from 'react-router-dom';




const Profile = () => {
	const context = useContext(Context);
	const { username, setUsername, handleEvent, password, address,
		setAdress, number, setNumber, setPassword, email,
		setEmail, userId, setIsProfileSaved,
		avatarUrl, setAvatarUrl} = context

	function refreshPage() {
		window.location.reload(false);
	}
	const saveHandler = () => {
		const id = userId
		let updatedUser = {
			'username': username,
			'email': email,
			'password': password,
			'number': number,
			'address': address,
			"img": avatarUrl
		}
		const formData = new FormData();
		formData.append('avatarUrl', avatarUrl)
		formData.append('updatedUser', JSON.stringify(updatedUser))
		fetch(`http://localhost:8000/api/user/${id}`, {
			method: 'PATCH',
			headers: {
				authorization: localStorage.getItem('token'),
			},
			body: formData
		})
			.then(response => response.json())
			.then(results => {
				setIsProfileSaved(true)
				refreshPage(true)
				
				console.log(results);
			}).catch((error) => {
				console.log(error.message);
			})

	}


	const inputHandler = (e) => {

		switch (e.target.name) {
			case 'username':
				setUsername(e.target.value);
				break;

			case 'password':
				setPassword(e.target.value);
				break;

			case 'address':
				setAdress(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value)
				break;
			case 'number':
				setNumber(e.target.value)
				break;
			case 'img':
				setAvatarUrl(e.target.files[0])
				break;

			default:
				console.error(`There's a problem. Please check the event listener.`);
				break;
		}
	}

	return (

		<div className='account-container'>
			<div className='img-box'>
				<div className='background-img'></div>
				<div className='profile-img-box'>
					<img className='profile-img' src={avatarUrl ? 'http://localhost:8000/' + avatarUrl : profile_img} alt="" />
					<i className='profile-icon'><FontAwesomeIcon icon={faPlus} />
						<input className='uploader' multiple accept="image/*" name="img" id='uploader' type='file' onChange={inputHandler} />
					</i>
				</div>
			</div>
			<form onClick={handleEvent} className='info-box'>
				<div className='info'>
					<span>UserName</span>
					<input className='inputFeld' type="text" name='username' value={username || ''} placeholder="username" onChange={inputHandler} />
				</div>
				<div className='info'>
					<span>Address</span>
					<input className='inputFeld' type="text" name='address' value={address || ''} placeholder="address" onChange={inputHandler} />
				</div>
				<div className='info'>
					<span>E-mail</span>
					<input className='inputFeld' type="email" name='email' value={email || ''} placeholder="email" onChange={inputHandler} />
				</div>
				<div className='info'>
					<span>Number</span>
					<input className='inputFeld' type="number" name='number' value={number || ''} placeholder="number" onChange={inputHandler} />
				</div>

				<div className='info'>
					<span>Password</span>
					<Link className='linkforgetpass' to="/forget-password">Update password</Link>
					
				</div>
				<input className='submitPro' onClick={saveHandler} type="submit" name='submit' value="Update Profile" />
			</form>


			<div className='footer'>
				<BottomNav />
			</div>
		</div>


	)
}

export default Profile