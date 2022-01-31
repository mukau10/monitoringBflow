import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AtomCard from "./AtomCard";
import "react-notifications/lib/notifications.css";
import axios from "axios";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function AtomsComponent() {
  const [atoms, setAtoms] = useState([]);
  const [certificates, setCertificates] = useState([]);


  return (
    <div>
      <h1>Alle logs komen hier</h1>
    </div>
  );
}
