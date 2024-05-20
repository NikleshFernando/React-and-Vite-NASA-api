import React, { useState, useEffect, Fragment } from "react";
import Navbar from "./Navbar/Navbar";

function MAP() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_KEY}`;

      try {
        setLoading(true);
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData.photos);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1 className="text-center_my-4">Mars Rover Pictures</h1>
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-center text-danger">{error}</div>}
        {data && (
          <div className="row">
            {data.map((photo) => (
              <div key={photo.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={photo.img_src}
                    className="card-img-top"
                    alt={photo.rover.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{photo.rover.name}</h5>
                    <p className="card-text">
                      Camera: {photo.camera.full_name}
                      <br />
                      Earth Date: {photo.earth_date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default MAP;
