import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

export default function AtomCard(props) {
  return (
    <div className="dashboardContainer__atomCard">
      <Card >
        <Card.Img variant="top" className="dashboardContainer__atomCard-image" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary" onClick={props.atomInfo}>
            {props.button}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
