import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Context from '../../context/MyContext';
import BottomNav from '../bottomNav/BottomNav';


import './scannerStyle.css'
const Scanner = () => {
  const [plant, setPlant] = useState([]);
  const context = useContext(Context);
  const { setResult_id } = context
  const navigate = useNavigate('')


  const plantIdentification = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("plant", plant);
    fetch('http://localhost:8000/plantsId/identify', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(results => {
        console.log(results);
        setResult_id(results)
        navigate('/scanner/identify')
      }).catch(error => console.log(error.message))
  }

  const plantHealth = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("plant", plant);
    fetch('http://localhost:8000/plantsId/health', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(results => {
        console.log(results);
        setResult_id(results)
        navigate('/scanner/health')
      }).catch(error => console.log(error.message))
  }
  return (
    <div className="scanner-container">
      <div className="scanner-banner">
        <h1>
          Identify plants and plant diseases. For free.</h1>
      </div>
      <form action="">
        <span className="TakePicture">Chosse Picture</span>
        <input className="fileInputScann" type="file" accept="image/*;capture=camera" onChange={(e) => setPlant(e.target.files[0])} />
      </form>
      
      <div className="chosebtn">
        <button className="btn-plantId" onClick={plantIdentification}>Identify</button>
        <button className="btn-plantHealth" onClick={plantHealth}>Health</button>
      </div>

      <div className="Outlet-dev">
        <Outlet />
      </div>

      <span className="TakePictureLINE"></span>
     <div className="infoIdintfy">
       <div className="">
         <h2>How to identify a plant?</h2>
         <p>Take a photos of your plant, upload it, let us identify it, and view the result in seconds. This web demo enables you to identify up to 5 plants per week for free.</p>
       </div>
       <span className="TakePictureLINE"></span>
       <div className="">
         <h2>Plenty of Plants</h2>
         <p>Plant.id can identify more than 12,000 plant taxons, including flowers, trees, bushes, fungi, and lichens from all over the world. Besides the Latin name, we will also give you common names, brief description, and taxonomy of your plant.</p>
       </div>
       <span className="TakePictureLINE"></span>
       <div className="">
         <h2>Plant diseases</h2>
         <p>Pests, fungal disease, or an over-watered plant? Plant.id Health Assessment feature can tell the difference! Our model recognizes 100 different diseases (such as thrips, powdery mildew, and nutrient deficiency). To see how it works, just click on the button of the health  after you made your identification.</p>
       </div>
       <span className="TakePictureLINE"></span>
     </div>


      <div className="suggestFooter">
        <BottomNav />
      </div>
      

    </div>
  )
}

export default Scanner