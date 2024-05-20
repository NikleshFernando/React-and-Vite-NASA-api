import React from "react";

export default function Sidebar(props) {
  const { handleToggleModel, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModel}></div>
      <div className="sidebarContent">
        <h2 className="sidebarH2">{data?.title}</h2>
        <div className="sidebarDiscription">
          <p className="sidebarPTitle">{data?.date}</p>
          <p className="sidebarP">{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
