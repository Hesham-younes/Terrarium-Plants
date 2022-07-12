import React, { useContext } from 'react'
import Context from '../../context/MyContext'

const HealthResult = () => {
    const context = useContext(Context)
    const { result_id } = context
 
      const diseases = result_id.health_assessment.diseases.map((element)=> {
        return (
          <li key={element.entity_id}>
             <img src={element.similar_images[0].url} alt="" />
          <p>-issus: {element.name}</p>  
          </li>
        )
      })
  return (
    <div className="plantHealtdiv">
      <h1>healthResult</h1>
      <span className="TakePictureLINE"></span>
      <ul>{diseases}</ul> 
    </div>
  )
}

export default HealthResult