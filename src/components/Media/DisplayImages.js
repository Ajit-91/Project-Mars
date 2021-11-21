import React, { useEffect, useState } from "react";
import { Row, Col, Button, Image, Modal } from "react-bootstrap";
import "../../css/Pages/media.css";

export default function DisplayImages(props) {
  const [images, setImages] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState();

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${props.currentSol}&camera=${props.currentCam}&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((mediaData) => {
        setImages(mediaData?.photos);
      });
  }, [props.currentCam, props.currentSol]);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={modalImg} alt="acva" width="100%" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      {images?.length === 0 ? (
        <Row>
          <Col className="noimg">NO IMAGES AVAILABLE</Col>
        </Row>
      ) : (
        <Row className="imgrow py-5" xs={2} sm={3} md={4} xl={5}>
          {images?.map((data, index) => {
            return (
              <Col className="imgcol" key={index}>
                <Button
                  className="imgbtn mb-2 p-0"
                  onClick={() => setModalShow(true)}
                >
                  <Image
                    className="dataimg"
                    src={data?.img_src}
                    onClick={() => setModalImg(data?.img_src)}
                    alt="rover"
                    rounded
                  />
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}
