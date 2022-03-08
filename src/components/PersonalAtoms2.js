import React, { useState, useEffect } from "react";
import CertificateCard from "./CertificateCard";
import randomAtomPicture from "../images/atom.png";
import eliePicture from "../images/Elie.jpg";
import glenPicture from "../images/Glen.jpg";
import koenPicture from "../images/Koen.jpg";
import michaelPicture from "../images/Michael.jpg";
import bflowPicture from "../images/bflow.jpg";
import certificatePicture from "../images/certificate.png";
import AtomCard2 from "./AtomCard2";

export default function PersonalAtoms2(value, key) {
    function calculateExpirationDate(date) {
        let myDate = new Date(date);
    
        let expirationData = new Date(myDate.toUTCString());
    
        let today = new Date();
    
        let difference = expirationData - today;
        let days = Math.round(difference / (1000 * 60 * 60 * 24));
        return <b>{days}</b>;
      }
    if (value.name === "Local_Atom_Glen") {
      return (
        <AtomCard2
          key={key}
          image={glenPicture}
          name={value.name}
          instanceId={value.instanceId}
          cloudId={value.cloudId}
          type={value.type}
          hostName={value.hostName}
          dateInstalled={value.dateInstalled}
          id={value.id}
          status={value.status}
        />
      );
    }
    if (value.name === "MichaelAtom") {
      return (
        <AtomCard2
          key={key}
          image={michaelPicture}
          name={value.name}
          instanceId={value.instanceId}
          cloudId={value.cloudId}
          type={value.type}
          hostName={value.hostName}
          dateInstalled={value.dateInstalled}
          id={value.id}
          status={value.status}
        />
      );
    }
    if (value.name === "Local_Atom_Elie") {
      return (
        <AtomCard2
          key={key}
          image={eliePicture}
          name={value.name}
          instanceId={value.instanceId}
          cloudId={value.cloudId}
          type={value.type}
          hostName={value.hostName}
          dateInstalled={value.dateInstalled}
          id={value.id}
          status={value.status}
        />
      );
    }
    if (value.name === "Test Atom Cloud") {
      return (
        <AtomCard2
          key={key}
          image={bflowPicture}
          name={value.name}
          instanceId={value.instanceId}
          cloudId={value.cloudId}
          type={value.type}
          hostName={value.hostName}
          dateInstalled={value.dateInstalled}
          id={value.id}
          status={value.status}
        />
      );
    }
    if (value.certificateName) {
      return (
        <CertificateCard
          key={key}
          image={certificatePicture}
          certificateName={value.certificateName}
          certificateType={value.certificateType}
          accountId={value.accountId}
          containerName={value.containerName}
          environmentId={value.environmentId}
          environmentName={value.environmentName}
          dateInstalled={value.dateInstalled}
          certificateId={value.certificateId}
          status={value.status}
          expirationDate={calculateExpirationDate(value.expirationDate)}
        />
      );
    }
  }