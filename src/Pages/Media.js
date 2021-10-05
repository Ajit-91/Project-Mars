import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
  Button,
  Image
} from "react-bootstrap";
import "../css/Pages/media.css";

export default function Media() {
  const [images, setImages] = useState();
  const [camera, setCamera] = useState("NAVCAM_LEFT");
  const [sol, setSol] = useState();

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&camera=${camera}&api_key=wNpg5jFJHVhHYBNMaWgrKxdUhAZE4kMqdHL3a2Fm`
    )
      .then((res) => res.json())
      .then((mediaData) => {
        setImages(mediaData?.photos);
      });
  }, [camera, sol]);

  useEffect(() =>
  {
    fetch("https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json")
      .then(res => res.json())
      .then(weatherData =>
      {
        setSol(weatherData?.sols[6].sol);
        
      })

  }, [setSol])

  function handleSelectChange(event) {
    setCamera(event.target.value);
  }

  return (
    <div className="media">
      <Container className="imgcontainer p-3">
        <Row className="pt-3 pb-3">
          <Col>
            <h1>ROVER : PERSEVARANCE</h1>
          </Col>
        </Row>
        <Row xs="auto">
          <Col>
            {" "}
            <Form.Group controlId="formGridState">
              <Form.Label>Camera</Form.Label>
              <Form.Select defaultValue={camera} onChange={handleSelectChange}>
                <option value="NAVCAM_LEFT">NAVCAM LEFT</option>
                <option value="NAVCAM_RIGHT">NAVCAM RIGHT</option>
                <option value="MCZ_LEFT">MCZ LEFT</option>
                <option value="MCZ_RIGHT">MCZ RIGHT</option>
                <option value="FRONT_HAZCAM_LEFT_A">FRONT HAZCAM LEFT A</option>
                <option value="FRONT_HAZCAM_RIGHT_A">
                  FRONT HAZCAM RIGHT A
                </option>
                <option value="REAR_HAZCAM_LEFT">REAR HAZCAM LEFT</option>
                <option value="REAR_HAZCAM_RIGHT">REAR HAZCAM RIGHT</option>
                <option value="SKYCAM">SKYCAM</option>
                <option value="SUPERCAM_RMI">SUPERCAM RMI</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group controlId="formGridState">
              <Form.Label>Sol</Form.Label>
              <Form style={{ maxWidth: "50%", borderRadius: "0" }}>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    id="solbtn"
                    variant="secondary"
                    onClick={() => setSol(sol - 1)}
                  >
                    -
                  </Button>
                  <Form.Control
                    placeholder={sol}
                    className="solvalue"
                    value={sol}
                    onChange={(e)=>setSol(e.target.value)}
                    
                  ></Form.Control>
                  <Button
                    id="solbtn"
                    variant="secondary"
                    onClick={() => setSol(sol + 1)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Form>
            </Form.Group>
          </Col>
        </Row>
        <Row className="pt-3"></Row>
        {images?.length === 0 ? (
          <Row>
            <Col className="noimg">NO IMAGES AVAILABLE</Col>
          </Row>
        ) : (
          <Row className="imgrow py-5" xs={2} sm={3} md={4} xl={5}>
            {images?.map((data, index) => {
              return (
                <Col className="imgcol" key={index}>
                  <Image
                    className="dataimg"
                    src={data?.img_src}
                    alt="rover"
                    rounded
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
}
