import React, { useState, useEffect } from "react";
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function CertificateCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function BflowCertificateCard() {
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
            <Modal.Title>
              {props.certificateName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroup.Item>
                <b>ACCOUNT ID: </b>
                {props.accountId}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>CERTIFICATE TYPE: </b>
                {props.certificateType}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>ENVIRONMENT NAME: </b>
                {props.environmentName}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>ID: </b>
                {props.certificateId}
              </ListGroup.Item>
              {props.containerName ? (
                <ListGroup.Item>
                  <b>Container Name: </b>
                  {props.containerName}
                </ListGroup.Item>
              ) : (
                <ListGroup.Item>
                  <b>TYPE: </b>
                  {props.type}
                </ListGroup.Item>
              )}
              {props.expirationDate ? (
                <ListGroup.Item className="listGroupItem">
                  Expires in {props.expirationDate} days!
                </ListGroup.Item>
              ) : (
                ""
              )}
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
          {props.name}
          {props.certificateName}
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
          <BflowCertificateCard />
        </div>
      </div>
    </div>
  );
}
