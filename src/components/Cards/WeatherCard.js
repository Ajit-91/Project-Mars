import React from 'react'
import model from "../../Images/Mars.glb"
import formatDate from '../../Utilities/FormatDate'
import "../../css/Components/weatherCard.css"

const WeatherCard = ({ mainSolData }) =>
{
    console.log("mainSolData from comp", mainSolData)

    return (
        <>
            <div className="Card">
            <div className="info">
                    <h2>lateset weather at Jezero Crater</h2>
                    <div className="solAndTemp">
                        <div>
                            <h1>sol {mainSolData?.sol}</h1>
                            <h5>{formatDate(mainSolData?.terrestrial_date)}</h5>
                        </div>
                        <div className="temperatures">
                            <h1>Temperature</h1>
                            <h4>High : {mainSolData?.max_temp} &deg;C</h4>
                            <h4>Low : {mainSolData?.min_temp} &deg;C</h4>
                        </div>
                    </div>
                    <p>Preserverance is taking regular weather measurements at Jezero Crater, in the  lsidis Planitia region of Mars northern hemisphere</p>
                    <p>At this location it's currently<h4>{mainSolData?.season}</h4></p>
            </div>
            <div className="modelContainer">
                    <model-viewer
                        id="marsModel"
                        src={model}
                        alt="A 3D model of a mars"
                        ar
                        camera-controls
                        disable-zoom
                        ar-modes="webxr scene-viewer quick-look"
                        environment-image="neutral"
                        auto-rotate
                    />
               </div> 
            </div>
        </>
    )
}

export default WeatherCard;

