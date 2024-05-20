import React, { useState, useEffect, Fragment } from "react";
import Navbar from "./Navbar/Navbar";

function EIA() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData.sources[0].url); // Store the URL of the first image source
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div>{data && <img src={data} alt="Earth Imagery" />}</div>
    </Fragment>
  );
}

export default EIA;
