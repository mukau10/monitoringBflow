import React, { useState, useEffect } from "react";
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function AtomCard2(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function BflowAtomCard() {
    return (
      <>
        <button
          className="dashboardContainer__atomCard2__online__button"
          onClick={handleShow}
        >
          👁️
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.name != "" ? props.name : props.certificateName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {props.acc}
              <ListGroup.Item>
                <b>
                  NAME: {props.name != "" ? props.name : props.certificateName}
                </b>
                {props.cloudId}
              </ListGroup.Item>

              <ListGroup.Item>
                <b>CLOUD ID: </b>
                {props.cloudId}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>DATE INSTALLED: </b>
                {props.dateInstalled}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>HOST NAME: </b>
                {props.hostName}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>INSTANCE ID: </b>
                {props.instanceId}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>ID: </b>
                {props.id}
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div className="dashboardContainer__atomCard2__online">
      <div className="dashboardContainer__atomCard2__online-cards">
        <img
          className="dashboardContainer__atomCard2__online-cards__image"
          src={props.image}
        />
        <span className="dashboardContainer__atomCard2__online-cards__image-status"></span>
      </div>
      <div className="dashboardContainer__atomCard2__online__button">
        <BflowAtomCard />
      </div>
    </div>
  );
}
