import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AtomCard from "./AtomCard";
import base64 from "react-native-base64";
import eliePicture from "../images/Elie.jpg";
import glenPicture from "../images/Glen.jpg";
import koenPicture from "../images/Koen.jpg";
import michaelPicture from "../images/Michael.jpg";

export default function DashboardComponent() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [atoms, setAtoms] = useState([]);
  const [offlineAtoms, setOfflineAtoms] = useState([]);
  const [onlineAtoms, setOnlineAtoms] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [onlineAtomsCount, setOnlineAtomsCount] = useState(0);
  const [offlineAtomsCount, setOfflineAtomsCount] = useState(0);
  const [certificatesCount, setCertificatesCount] = useState(0);

  var encode = base64.encode(
    "hrmc-3HATHD.DXKXN6:9f23c66d-c67b-4799-95d5-8477cc34ad12"
  );

  function callApi() {
    axios
      .get("http://localhost:8080", {
        headers: {
          Accept: "*/*",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Max-Age": 3600,
        },
      })
      .then((response) => [console.log(response.data), setAtoms(response.data)])
      .catch((err) => console.error(err));
  }
  setTimeout(() => {
    callApi();
  }, 1000 * 900);
  //roept de API om de 15min
  setTimeout(() => {
    getOnlineAtoms();
    getOfflineAtoms();
    getCertificates();
  }, 50000);

  useEffect(() => {
    callApi();
  }, []);

  function getCertificates() {
    atoms.map((x) => {
      return Object.values(x)
        .filter((y) => y.certificateName != null)
        .map((z) => setCertificates((oldArray) => [...oldArray, z]));
    });
    const distinctCertObj = [...new Set(certificates)];
    setCertificatesCount(distinctCertObj.length);
    return distinctCertObj.length;
  }

  function getOnlineAtoms() {
    atoms.map((x) => {
      return Object.values(x)
        .filter((y) => y.status === "ONLINE")
        .map((z) => setOnlineAtoms((oldArray) => [...oldArray, z]));
    });
    const distinctAtomObj = [...new Set(onlineAtoms)];
    setOnlineAtomsCount(distinctAtomObj.length);
    return distinctAtomObj.length;
  }

  function getOfflineAtoms() {
    atoms.map((x) => {
      return Object.values(x)
        .filter((y) => y.status === "OFFLINE")
        .map((z) => setOfflineAtoms((oldArray) => [...oldArray, z]));
    });
    const distinctAtomObj = [...new Set(offlineAtoms)];
    setOfflineAtomsCount(distinctAtomObj.length);
    return distinctAtomObj.length;
  }

  return (
    <div className="dashboardContainer">
      <main>
        <div className="dashboardContainer__buttons">
          <button onClick={getOnlineAtoms}>VIEW ONLINE ATOMS</button>
          <button onClick={getOfflineAtoms}>VIEW OFFLINE ATOMS</button>
          <button onClick={getCertificates}>VIEW CERTIFICATES</button>
          <button onClick={callApi}>CALL API</button>
        </div>
        <div className="dashboardContainer__counts">
          <ul>
            <li style={{ color: "green" }}>ONLINE ATOMS: {onlineAtomsCount}</li>
            <li style={{ color: "red" }}>OFFLINE ATOMS: {offlineAtomsCount}</li>
            <li style={{ color: "purple" }}>
              CERTIFICATES: {certificatesCount}
            </li>
          </ul>
        </div>

        <div className="dashboardContainer__atomCards">
          {atoms.map((x) => {
            return Object.values(x).map((y, index) => (
              <AtomCard
                key={index}
                image={""}
                name={y.name ? y.name : "C -> " + y.certificateName}
                instanceId={y.instanceId}
                button="Details"
                status={y.status}
              />
            ));
          })}
        </div>
      </main>
    </div>
  );
}
