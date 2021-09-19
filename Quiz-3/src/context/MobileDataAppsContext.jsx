import axios from "axios";
import React, { createContext, useState } from "react";

export const MobileDataAppsContext = createContext();

export const MobileDataAppsProvider = (props) => {
  const [mobileDataApps, setMobileDataApps] = useState([]);
  const [input, setInput] = useState({
    nama: "",
    course: "",
    score: 0,
  });
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(false);

  const fetchData = async () => {
    let result = await axios.get(
      "http://backendexample.sanbercloud.com/api/mobile-apps"
    );
    let data = result.data;
    console.log(data);
    setMobileDataApps(
      data.map((e, index) => {
        // let indexScore = getScore(e.score);
        return {
          no: index + 1,
          id: e.id,
          name: e.name,
          description: e.description,
          category: e.category,
          size: e.size,
          price: e.price,
          rating: e.rating,
          image_url: e.image_url,
          release_year: e.release_year,
          is_android_app: e.is_android_app,
          is_ios_app: e.is_ios_app,
          // indexScore: indexScore,
        };
      })
    );
  };

  const fetchById = async (idMahasiswa) => {
    let res = await axios.get(
      `http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
    );
    let data = res.data;
    setInput({
      id: data.id,
      nama: data.name,
      course: data.course,
      score: data.score,
    });
    setCurrentId(data.id);
  };

  const functionDelete = (idMahasiswa) => {
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
      )
      .then(() => {
        let newmobileDataApps = mobileDataApps.filter((res) => {
          return res.id !== idMahasiswa;
        });
        setMobileDataApps(newmobileDataApps);
      });
  };

  const functions = {
    fetchData,
    functionDelete,
    fetchById,
  };

  return (
    <MobileDataAppsContext.Provider
      value={{
        mobileDataApps,
        setMobileDataApps,
        input,
        setInput,
        currentId,
        setCurrentId,
        functions,
        fetchStatus,
        setFetchStatus,
      }}
    >
      {props.children}
    </MobileDataAppsContext.Provider>
  );
};
