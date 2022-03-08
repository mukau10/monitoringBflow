import React, { useState, useEffect } from "react";
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function AtomCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function BflowAtomCard() {
    return (
      <>
        <button
          className="dashboardContainer__atomCard-footer__bottom-button"
          onClick={handleShow}
        >
          Details
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.name != ""? props.name:props.certificateName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {props.acc}
              <ListGroup.Item><b>CLOUD ID: </b>{props.cloudId}</ListGroup.Item>
              <ListGroup.Item><b>DATE INSTALLED: </b>{props.dateInstalled}</ListGroup.Item>
              <ListGroup.Item><b>HOST NAME: </b>{props.hostName}</ListGroup.Item>
              <ListGroup.Item><b>INSTANCE ID: </b>{props.instanceId}</ListGroup.Item>
              <ListGroup.Item><b>ID: </b>{props.id}</ListGroup.Item>
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
    <div className="dashboardContainer__atomCard">
      <div className="dashboardContainer__atomCard-header">
        <img
          className="dashboardContainer__atomCard-header__image"
          src={props.image}
        />
      </div>
      <div className="dashboardContainer__atomCard-body">
        <h4 className="dashboardContainer__atomCard-body__name">
          {props.name}{props.certificateName}
        </h4>
        <span>{props.instanceId}</span>
        <span>{props.certificateType}</span>
        <span>{props.accountId}</span>
      </div>
      <div className="dashboardContainer__atomCard-footer">
        <div className="dashboardContainer__atomCard-footer__top">
          {props.status == "ONLINE" ? (
            <div className="dashboardContainer__atomCard-footer__top-online">
              <span className="dashboardContainer__atomCard-footer__top-online-circle"></span>
              <span>{props.status}</span>
            </div>
          ) : (
            <div className="dashboardContainer__atomCard-footer__top-offline">
              <span className="dashboardContainer__atomCard-footer__top-offline-circle"></span>
              <span>{props.status}</span>
            </div>
          )}
        </div>
        <div className="dashboardContainer__atomCard-footer__bottom">
          <BflowAtomCard />
        </div>
      </div>
    </div>
  );
}
