import React, { useEffect, useContext } from "react";
import { MobileDataAppsContext } from "../context/MobileDataAppsContext";

const Home = () => {
  const { mobileDataApps, functions, fetchStatus, setFetchStatus } = useContext(
    MobileDataAppsContext
  );

  const { fetchData } = functions;

  useEffect(() => {
    if (fetchStatus === false) {
      fetchData();
      setFetchStatus(true);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const convertSize = (size) => {
    let output;
    if (size >= 1000) {
      output = `${size / 1000} GB`;
    } else {
      output = `${size} MB`;
    }
    return output;
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Popular Mobile Apps</h1>
      {mobileDataApps.map((data) => {
        return (
          <div className="mobileCard" key={data.id}>
            <h2>{data.name}</h2>
            <h5>{data.release_year}</h5>
            <img
              className="fakeimg"
              style={{ width: "50%", height: "300px", objectFit: "cover" }}
              src={data.image_url}
              alt="images"
            />
            <br />
            <div>
              <strong>
                Price: {data.price === 0 ? "Free" : `Rp. ${data.price},-`}
              </strong>
              <br />
              <strong>Rating: {data.rating}</strong>
              <br />
              <strong>Size: {convertSize(data.size)}</strong>
              <br />
              <strong style={{ marginRight: "10px" }}>
                Platform : Android & IOS
              </strong>
              <br />
            </div>
            <p>
              <strong style={{ marginRight: "10px" }}>Description :</strong>
              {data.description}
            </p>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
