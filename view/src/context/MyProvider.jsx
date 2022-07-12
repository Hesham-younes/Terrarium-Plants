import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from './MyContext'
import axios from 'axios';



export const MyProvider = ({ children }) => {
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAdress] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState({ password: '' });
  const [error, setError] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('')
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([])
  const [result_id, setResult_id] = useState([]);
 


  //controlle cartitem in localstorge
  useEffect(() => {
    const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems'));
    localStorageCartItems && setCartItems(localStorageCartItems);
  }, []);
  useEffect(() => {
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  //controlle favorite items in localstorge
  useEffect(() => {
    const localStorageFavorite = JSON.parse(localStorage.getItem('favorite'));
    localStorageFavorite && setFavorite(localStorageFavorite);
  }, []);
  useEffect(() => {
    localStorage.removeItem('favorite');
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);




  /* get user data for profile  */
  useEffect(() => {
    fetch('http://localhost:8000/api/user/', {
      method: 'GET',
      headers: {
        'authorization': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(results => {
        setAvatarUrl(results.user[0].img)
        setUsername(results.user[0].username)
        setPassword(results.user[0].password)
        setAdress(results.user[0].address)
        setEmail(results.user[0].email)
        setUserId(results.user[0]._id)
      })

  }, [])



  const handleEvent = (e) => {
    e.preventDefault();
  }

  const handleLogOut = async () => {
    localStorage.removeItem('token');
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    navigate('/');
    window.location.reload();
  }

  const handleRegister = async () => {
    if (username && email && password === '') {
      setError('Please fill the form below!')
      setTimeout(() => {
        setError(false)
      }, 4000)
    } else if (error) {
      setError('Oops!!Somthing went wrong')
      setTimeout(() => {
        setError(false)
      }, 4000);
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('Password do not match');
      setTimeout(() => {
        setError(false)
      }, 4000);
    } try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        username, email, password
      })
      if (response)
        document.cookie = `token=${response.data.token}`;
        
      navigate('/');
    } catch (error) {
      setError(error.response.data);
      console.log(error.message);
    }

  }

  const loginHandle = async () => {
    if (email && password === '') {
      setError('Please fill the form below!')
      setTimeout(() => {
        setError(false)
      }, 4000)
    } else if (error) {
      setError('Oops!!Somthing went wrong')
      setTimeout(() => {
        setError(false)
      }, 4000);
    }
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email, password
      })
      if (!email) return setError(error.message)
      localStorage.setItem('token', response.data.token)
      document.cookie = `token=${response.data.token}`;
      navigate('/home')
    } catch (error) {
      setError('Password or email are not valid')
      setTimeout(() => {
        setError(false)
      }, 4000);
    }
  }

  const showPassword = () => {
    setType({
      password: !type.password
    })
  }

  const showConfirmPassword = () => {
    setType({
      password: false,
      confirmPassword: !type.confirmPassword
    })
  }
  return (
    <Context.Provider value={{
      type, setType, showPassword, showConfirmPassword,
      username, setUsername, email, setEmail, password,
      setPassword, error, setError, loading, setLoading,
      passwordRef, confirmPasswordRef, handleEvent,
      handleRegister, navigate, loginHandle, cartItems,
      setCartItems, handleLogOut,
      userId, setUserId, address,
      setAdress, number, setNumber, isProfileSaved,
      setIsProfileSaved,
      avatarUrl, setAvatarUrl,
      favorite, setFavorite,result_id, setResult_id,
      
    }}>
      {children}
    </Context.Provider>
  )
}
export default MyProvider