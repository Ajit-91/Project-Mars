
import React, { useState, useEffect } from "react"
import HomeCarousel from "../components/Navbar/HomeCarousel"
import CardData from '../Data/CardData'
import FactCard from "../components/Cards/FactCard"
import "../css/Pages/Home.css"
import { Container } from "react-bootstrap"

function Home()
{
  const [angle, setAngle] = useState(0);
  const [data, setData] = useState("");
  useEffect(() =>
  {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then((result) =>
      {
        setData(result);
        console.log(result);
      });
  }, []);

  const dragCards = (pos) =>
  {
    if (pos < window.screen.availWidth / 2)
    {
      setAngle(angle - 45);
    }
    else setAngle(angle + 45)
  }


  return (
    <>
      <HomeCarousel />
      <div className="heading">
        <h2>Need to know things about Mars</h2>
      </div>
      <section id="factBox">

        <div className="box"
          draggable={true}
          onTouchStart={(e) =>
          {
            e.preventDefault();
            console.log(e)
            dragCards(e.targetTouches[0].pageX)
          }}
          onDragStart={(e) =>
          {
            e.preventDefault();
            dragCards(e.pageX)
          }}
          style={{ transform: `perspective(11900px) rotateY(${-angle}deg)` }}
        >

          {
            CardData.map((val, i) =>
            {
              return (
                <FactCard key={i} num={i + 1} title={val.title} img={val.image} text={val.text} />
              )
            })
          }
        </div>
      </section>
      <div className="heading">
        <h2>ASTRONOMICAL PICTURE OF THE DAY</h2>
      </div>
      <Container fluid id="APOD">
        {
          !data || data?.msg === "Internal Service Error" ?
          (
              <Container >
              <div className="noData">
                <h1>Currently No Data Available</h1>
                </div>
              </Container>
          )
                :
          (
                  <Container >
                    {
                      data?.media_type === "video" ?
                        <iframe
                          className="apodMedia"
                          title="video"
                          src={data.url}
                          alt="APOD"
                        />
                        :
                        <img
                          src={data.url}
                          alt="APOD"
                        />
                    }
                    <h3>{data.title}</h3>
                    <p>{data.explanation}</p>
                  </Container>
          )
        }
              </Container>
            </>
  )
}


        export default Home;
