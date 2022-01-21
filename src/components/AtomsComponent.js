import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "react-notifications/lib/notifications.css";
import axios from "axios";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function AtomsComponent() {
  const [atoms, setAtoms] = useState([]);
  const [certificates, setCertificates] = useState([]);

  function callApi() {
    axios
      .get(
        "https://c01-usa-east-et.integrate-test.boomi.com/ws/simple/getMonitoring",
        {
          headers: {
            Authorization:
              "Basic aHJtYy0zSEFUSEQuRFhLWE42OjlmMjNjNjZkLWM2N2ItNDc5OS05NWQ1LTg0NzdjYzM0YWQxMg==",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={callApi}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
