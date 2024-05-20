import Footer from "./Footer";
import Main from "./Main";
import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";
import React from "react";

function APOD() {
  const [data, setData] = useState(null);
  const [showModel, setShowModel] = useState(false);

  function handleToggleModel() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);
  return (
    <Fragment>
      <Navbar />
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && (
        <Sidebar data={data} handleToggleModel={handleToggleModel} />
      )}
      {data && <Footer data={data} handleToggleModel={handleToggleModel} />}
    </Fragment>
  );
}

export default APOD;
