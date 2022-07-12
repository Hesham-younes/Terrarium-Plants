import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import PlantDetails from './components/Plants/PlantDetails';
import Plants from './components/Plants/Plants';
import Signnup from './components/singup/Signnup'
import ProtectedRoute from './ProtectedRoute';
import Profile from './components/profile/Profile'
import ForgetPassword from './components/forgetPass/ForgetPassword';
import ResetPassword from './components/forgetPass/ResetPassword';
import Favorites from './components/favorites/Favorites';
import Scanner from './components/scanner/Scanner';
import ScannResults from './components/scanner/ScannResults';
import Loader from './components/loader/Loader';
import HealthResults from './components/scanner/HealthResult'
const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/signup' element={<Signnup />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/plants' element={<ProtectedRoute><Plants /></ProtectedRoute>} />
        <Route path='/plantDetails' element={<ProtectedRoute><PlantDetails /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/favorites' element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
        <Route path='/scanner' element={<ProtectedRoute><Scanner /></ProtectedRoute>}>
        <Route path='/scanner/identify' element={<ProtectedRoute><ScannResults /></ProtectedRoute>} />
        <Route path='/scanner/health' element={<ProtectedRoute><HealthResults /></ProtectedRoute>} />
        </Route>
        <Route path='/loading' element={<Loader />} />
      </Routes>
    </main>
  );
}

export default App;
