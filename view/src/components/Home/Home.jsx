import React from 'react'
import BottomNav from '../bottomNav/BottomNav'
import img1 from '../../assets/how-do.jpg'
import img3 from '../../assets/lifeSycel.jpg'
import img4 from '../../assets/plant1.jpg'
import img5 from '../../assets/closed-terrarium.jpg'
import img6 from '../../assets/terrariums-glass.jpg'
import img7 from '../../assets/garden.jpg'
import './homeStyle.css'


const Home = () => {
  return (
    <div className="container-box">
      <div>
        <div className='header'>
          <p className='header-text'>How To Care For Closed Terrariums</p>
        </div>
        <div className='content'>
          <div className='content-box'>
            <h2 className='content-title'>Closed Terrariums</h2>
            <p className='content-para'> are a great way to add some greenery and life to your living space Closed terrariums can be a bit tricky, though, as there is more of an effort required on the caretaker's behalf. Closed terrariums need regular watering and light exposure in order for them to grow healthy plants. This blog post will go over what steps you need to take when caring for closed office terrariums so that they stay lush and beautiful!</p>
          </div>
          <div className='content-box'>
              <h2 className='content-title'>What Does A Terrarium Mean?</h2>
              <div className='content-photo'>
                <img className='image' src={img1} alt="" />
              </div>
              <p className='content-para'>There are two different types of terrariums: closed and open. Closed systems create a more stable humid environment for plants, while open terrariums are subject to the outside air which will dry them out faster. Here, I'll focus on closed systems.
              It may take time for a closed terrarium to flourish, but once it does it is not difficult to care for. It's not uncommon for a healthy terrarium to go without water for months at a time.9
              </p>
          </div>
          <div className='content-box'>
            <h2 className='content-title'>How Do Closed Terrariums Work?</h2>
            <div  className='content-photo'>
              <img className='image2' src={img3} alt="" />
            </div>
            <p className='content-para'>One of the fascinations of a terrarium is to see how nature creates and sustains what we consider a “closed system”. Understanding how this system works helps you maintain it properly.
              The soil within the terrarium supports healthy microbial processes, with moisture from evaporation and plant transpiration recirculating continuously as condensed “rain” that keep the soil moist.The terrarium plants use light to produce oxygen, which is then absorbed by the plants during the night. Carbon dioxide is released during daylight hours due to photosynthesis but carbon dioxide produced by plant respiration ensures that it doesn't run out.Terrariums are self-supporting ecosystems which can absorb small fluctuations to remain in an overall healthy balance. However, a terrarium's ecology is not complete and requires light and occasional assistance from humans.</p>
          </div>
          <div className='content-box'>
            <h2 className='content-title'>What Plants Do Well In A Closed Terrarium?</h2>
            <div  className='content-photo'>
              <img className='image2' src={img4} alt="" />
            </div>
            <p className='content-para'>The plants you use in your terrarium make a difference in how easy it will be to maintain.Creating a terrarium can be tricky because there are so many factors to consider. While you might not need plants from all different species, it's important for some plants in your garden share similar preferences, including light demands and moisture levels. Otherwise conditions will vary too much and the terrarium won't thrive as well.Closed systems allow for the warmth and humidity that tropical plants need to survive. Mosses, ferns, and epiphytes are popular choices in a terrarium. Small orchids, little-known African violets, and other exotic flowers will also flourish in a closed terrarium environment. These plants thrive on bright colours and enhance the visual appeal of any space they occupy.</p>
          </div>
          <div className='content-box'>
            <h2 className='content-title'>What Plants Do Well In A Closed Terrarium?</h2>
            <div  className='content-photo'>
              <img className='image2' src={img5} alt="" />
            </div>
            <p className='content-para'>The plants you use in your terrarium make a difference in how easy it will be to maintain.Creating a terrarium can be tricky because there are so many factors to consider. While you might not need plants from all different species, it's important for some plants in your garden share similar preferences, including light demands and moisture levels. Otherwise conditions will vary too much and the terrarium won't thrive as well.Closed systems allow for the warmth and humidity that tropical plants need to survive. Mosses, ferns, and epiphytes are popular choices in a terrarium. Small orchids, little-known African violets, and other exotic flowers will also flourish in a closed terrarium environment. These plants thrive on bright colours and enhance the visual appeal of any space they occupy.</p>
          </div>
          <div className='content-box'>
            <h2 className='content-title'>What Plants Do Well In A Closed Terrarium?</h2>
            <div  className='content-photo'>
              <img className='image2' src={img6} alt="" />
            </div>
            <p className='content-para'>The plants you use in your terrarium make a difference in how easy it will be to maintain.Creating a terrarium can be tricky because there are so many factors to consider. While you might not need plants from all different species, it's important for some plants in your garden share similar preferences, including light demands and moisture levels. Otherwise conditions will vary too much and the terrarium won't thrive as well.Closed systems allow for the warmth and humidity that tropical plants need to survive. Mosses, ferns, and epiphytes are popular choices in a terrarium. Small orchids, little-known African violets, and other exotic flowers will also flourish in a closed terrarium environment. These plants thrive on bright colours and enhance the visual appeal of any space they occupy.</p>
          </div>
          <div className='content-box'>
            <h2 className='content-title'>What Plants Do Well In A Closed Terrarium?</h2>
            <div  className='content-photo'>
              <img className='image2' src={img7} alt="" />
            </div>
            <p className='content-para last'>The plants you use in your terrarium make a difference in how easy it will be to maintain.Creating a terrarium can be tricky because there are so many factors to consider. While you might not need plants from all different species, it's important for some plants in your garden share similar preferences, including light demands and moisture levels. Otherwise conditions will vary too much and the terrarium won't thrive as well.Closed systems allow for the warmth and humidity that tropical plants need to survive. Mosses, ferns, and epiphytes are popular choices in a terrarium. Small orchids, little-known African violets, and other exotic flowers will also flourish in a closed terrarium environment. These plants thrive on bright colours and enhance the visual appeal of any space they occupy.</p>
          </div>
        </div>
        <div className='footer'>
          <BottomNav />
        </div>
      </div>
    </div>
    
  )
}

export default Home;