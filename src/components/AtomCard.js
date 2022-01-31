import React, { useState, useEffect } from "react";

export default function AtomCard(props) {
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
        </h4>
        <span>{props.instanceId}</span>
      </div>
      <div className="dashboardContainer__atomCard-footer">
        <span>{props.status}</span>
      </div>
    </div>
  );
}
