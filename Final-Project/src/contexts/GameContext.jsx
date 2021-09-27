import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import React, { createContext, useState } from "react";

export const GameAppContext = createContext();

export const GameAppProvider = (props) => {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  // const [searchStatus, setSearchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  const [input, setInput] = useState({
    genre: "",
    image_url: "",
    name: "",
    platform: "",
    release: "",
    singlePlayer: false,
    multiplayer: false,
  });

  const fetchData = async (url) => {
    let result = await axios.get(url);
    let fetchResult = result.data;
    console.log(fetchResult);
    setData(
      fetchResult.map((res, index) => {
        return {
          no: index + 1,
          id: res.id,
          genre: res.genre,
          image_url: res.image_url,
          name: res.name,
          platform: res.platform,
          release: res.release,
          singlePlayer: res.singlePlayer,
          multiplayer: res.multiplayer,
        };
      })
    );
  };

  const fetchById = async (id) => {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-game/${id}`,
      {
        headers: { Authorization: "Bearer" + Cookies.get("token") },
      }
    );

    let data = res.data;
    setInput({
      id: data.id,
      genre: data.genre,
      image_url: data.image_url,
      name: data.name,
      platform: data.platform,
      release: data.release,
      singlePlayer: data.singlePlayer,
      multiplayer: data.multiplayer,
    });

    setCurrentId(data.id);
  };

  const functionSubmit = () => {
    console.log(input);
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-game`,
        {
          genre: input.genre,
          image_url: input.image_url,
          name: input.name,
          platform: input.platform,
          release: input.release,
          singlePlayer: input.singlePlayer,
          multiplayer: input.multiplayer,
        },
        {
          headers: { Authorization: "Bearer" + Cookies.get("token") },
        }
      )
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
        history.push("/gamelist");
      })
      .catch((e) => {
        console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };

  const functionUpdate = (currentId) => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${currentId}`,
        {
          genre: input.genre,
          image_url: input.image_url,
          name: input.name,
          platform: input.platform,
          release: input.release,
          singlePlayer: input.singlePlayer,
          multiplayer: input.multiplayer,
        },
        {
          headers: { Authorization: "Bearer" + Cookies.get("token") },
        }
      )
      .then((e) => {
        setFetchStatus(true);
        history.push("/gamelist");
      });
  };

  const functionDelete = (id) => {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${id}`, {
        headers: { Authorization: "Bearer" + Cookies.get("token") },
      })
      .then(() => {
        setFetchStatus(true);
      });
  };

  const functions = {
    functionDelete,
    fetchData,
    fetchById,
    functionSubmit,
    functionUpdate,
  };

  return (
    <GameAppContext.Provider
      value={{
        data,
        setData,
        fetchStatus,
        setFetchStatus,
        // searchStatus,
        // setSearchStatus,
        currentId,
        setCurrentId,
        input,
        setInput,
        functions,
      }}
    >
      {props.children}
    </GameAppContext.Provider>
  );
};
