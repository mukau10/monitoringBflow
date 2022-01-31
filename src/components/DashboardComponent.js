import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AtomCard from "./AtomCard";
import base64 from "react-native-base64";

export default function DashboardComponent() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [atoms, setAtoms] = useState([]);
  const [offlineAtoms, setOfflineAtoms] = useState([]);
  const [onlineAtoms, setOnlineAtoms] = useState([]);

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

  useEffect(() => {
    setTimeout(() => {
      "Hallo";
    }, 1000);
  }, []);

  function getOnlineAtoms() {
    atoms.map((x) => {
      return Object.values(x)
        .filter((y) => y.status == "ONLINE")
        .map((z) => setOnlineAtoms(oldArray =>[...oldArray, z]));
    });
    const distinctAtomObj = [...new Set(onlineAtoms)]
    return console.log("ONLINE ATOMS: " + distinctAtomObj.length);
  }

  function getOfflineAtoms() {
    atoms.map((x) => {
      return Object.values(x)
        .filter((y) => y.status == "OFFLINE")
        .map((z) => setOfflineAtoms(oldArray =>[...oldArray, z]));
    });
    const distinctAtomObj = [...new Set(offlineAtoms)]
    return console.log("OFFLINE ATOMS: " + distinctAtomObj.length);
  }

  const data = {
    labels: ["ATOMS", "CERTIFICATE", "CERTIFICATE", "ATOMS"],
    datasets: [
      {
        label: "ATOMS STATS",
        data: [onlineAtoms, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboardContainer">
      <main>
        <div className="dashboardContainer__pie"></div>
        <button onClick={getOnlineAtoms}>VIEW ONLINE ATOMS</button>
        <button onClick={getOfflineAtoms}>VIEW OFFLINE ATOMS</button>
        <button onClick={callApi}>CALL API</button>
        <div className="dashboardContainer__atomCards">
          {atoms.map((x) => {
            return Object.values(x).map((y, index) => (
              <AtomCard
                key={index}
                title={y.name ? y.name : "Certificate"}
                text=""
                button="Details"
              />
            ));
          })}
        </div>
      </main>
      <aside>
        <div className="dashboardPie">
          <Pie data={data} />
        </div>
      </aside>
    </div>
  );
}
