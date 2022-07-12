import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Context from '../../context/MyContext'
import BottomNav from '../bottomNav/BottomNav'
import './scannerStyle.css'

const ScannResults = () => {
    const context = useContext(Context)
    const { result_id } = context
    console.log(result_id.suggestions, 'result.suggestions');
    const data = result_id.suggestions.map((item) => {
        return (
            <li key={item.id} className="suggestionList">
                <h2>{item.plant_name}</h2>
                <img src={item.similar_images[0].url} alt="not found" width={"150px"} />
                <div className="common-names">
                    <p>Common name's: </p>
                    <div className="common-names-ant">
                        <p>{item.plant_details.common_names}</p>
                        
                    </div>

                </div>
                <span className="TakePictureLINE"></span>




                <div className="taxonomy">
                    <div className="taxonomy-key">
                        <p>Class:</p>
                        <p>Family:</p>
                        <p>Genus:</p>
                        <p>kingdom:</p>
                        <p>Order:</p>
                        <p>Phylum:</p>
                    </div>
                    <div className="taxonomy-value">
                        <p> {item.plant_details.taxonomy.class}</p>
                        <p> {item.plant_details.taxonomy.family}</p>
                        <p> {item.plant_details.taxonomy.genus}</p>
                        <p> {item.plant_details.taxonomy.kingdom}</p>
                        <p> {item.plant_details.taxonomy.order}</p>
                        <p> {item.plant_details.taxonomy.phylum}</p>
                    </div>
                   

                </div>
                <span className="TakePictureLINE"></span>
                <p className="wiki">wiki_description: <br /> {item.plant_details.wiki_description.value}</p>
                <a href={item.plant_details.url} alt="" target="_blank" rel='noreferrer'>Wiki link</a>
            </li>
        )
    })

    return (
        <>
            <div className="suggestResult">
                <h1>Plant Identify </h1>
                <span className="TakePictureLINE"></span>
                <ul className="suggestunorderList">{data}</ul>
            </div>
            <div className="suggestFooter">
                <BottomNav />
            </div>
            <Outlet />
        </>
    )
}

export default ScannResults