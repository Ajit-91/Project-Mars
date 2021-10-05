import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import WeatherCard from '../components/Cards/WeatherCard'
import formatDate from '../Utilities/FormatDate';
import "../css/Pages/weather.css"

export default function Weather()
{
  const [mainSolData, setMainSolData] = useState();
  const [restSolData, setRestSolData] = useState();

  useEffect(() =>
  {
    fetch("https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json")
      .then(res => res.json())
      .then(weatherData =>
      {
        setMainSolData(weatherData?.sols[6]);
        setRestSolData(() =>
        {
          return weatherData?.sols.filter((item, index) => index !== 6)
        })
      })

  }, [])
  console.log("mainSolData", mainSolData)
  console.log("restSolData", restSolData)

  return (
    <>
    <Container fluid id="weather">
      <Container className="py-5 allinfo" fluid="lg" >
        <div className="infoAndModel md-5">
          <WeatherCard mainSolData={mainSolData} />
        </div>

        <Row className="mt-5 gy-4">
        {
          restSolData?.map((data, i)=>{
            return(
              <Col lg={4} sm={6}>
              <div id="pastInfo" key={i}>
                  <span style={{ fontWeight: "bolder" }}>SOL {data.sol}</span>
                  <p>{formatDate(data?.terrestrial_date)}</p>
                  <hr />
                  {
                    (data?.max_temp === "--" || data?.min_temp === "--") ?
                      <p>Currently No Data Available</p>
                      :
                      <>
                        <p>HIGH : {data?.max_temp} &deg;C</p>
                        <p>LOW : {data?.min_temp} &deg;C</p>
                      </>
                  }
                </div>
              </Col>
            )
          })
        }
        </Row>
      </Container>
      </Container>
    </>
  )
}

