import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../bottomNav/BottomNav';
import './PlantsStyle.css'


const Plants =  () => {
 const [data, setDate] = useState([])
  useEffect(() => {
     
    async function getPlants() {
      const url = "http://localhost:8000/products/plants"
      const response = await fetch(url);
      const data = await response.json();
      if(data) {return setDate(data)}
     
    }
    getPlants();
  }, []);

   const element =  data.map((item,index)=> {
   return (
     
     <li className='item-list' key={index}>
      <div className='img-box'>
        <Link  to={`/plantDetails`} state={item}>
              <img className='item-img' src={item.imagUrl} alt="" />
        </Link>
        </div> 
       <div className="item-headline">
         <p className='item-type'>{item.type}</p>
         <h4 className='item-title'>{item.name}</h4>
       </div>
     </li>
   
 )
 })
  return (
    <div className='product-Container'>
      <div className="banner">
        <p>Terrariums<br />When you are a plant lover but don't have green fingers, then a terrarium is suitable for you. Your own mini jungle without having to look at it on a daily or even weekly basis.</p>
      </div>
      <div className='box-body'>
        <h1>Terrariums Gallery</h1>
        <ul className='main-list'>{ element }</ul>
        <BottomNav />
      </div>  
    </div>
  )
}
export default Plants;