import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import React, { createContext, useState } from "react";

export const MovieAppContext = createContext();

export const MovieAppProvider = (props) => {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  // const [searchStatus, setSearchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  const [input, setInput] = useState({
    description: "",
    duration: 0,
    genre: "",
    image_url: "",
    rating: 0,
    review: "",
    title: "",
    year: 1980,
  });

  const fetchData = async (url) => {
    let result = await axios.get(url);
    let fetchResult = result.data;
    console.log(fetchResult);
    setData(
      fetchResult.map((res, index) => {
        return {
          id: res.id,
          no: index + 1,
          image_url: res.image_url,
          title: res.title,
          description: res.description,
          year: res.year,
          duration: res.duration,
          genre: res.genre,
          rating: res.rating,
          review: res.review,
        };
      })
    );
  };

  const fetchById = async (id) => {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-movie/${id}`,
      {
        headers: { Authorization: "Bearer" + Cookies.get("token") },
      }
    );

    let data = res.data;
    setInput({
      id: data.id,
      description: data.description,
      duration: data.duration,
      genre: data.genre,
      image_url: data.image_url,
      rating: data.rating,
      review: data.review,
      title: data.title,
      year: data.year,
    });

    setCurrentId(data.id);
  };

  const functionSubmit = () => {
    console.log(input);
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-movie`,
        {
          description: input.description,
          duration: input.duration,
          genre: input.genre,
          image_url: input.image_url,
          rating: input.rating,
          review: input.review,
          title: input.title,
          year: input.year,
        },
        {
          headers: { Authorization: "Bearer" + Cookies.get("token") },
        }
      )
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
        history.push("/movielist");
      })
      .catch((e) => {
        console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };

  const functionUpdate = (currentId) => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-movie/${currentId}`,
        {
          description: input.description,
          duration: input.duration,
          genre: input.genre,
          image_url: input.image_url,
          rating: input.rating,
          review: input.review,
          title: input.title,
          year: input.year,
        },
        {
          headers: { Authorization: "Bearer" + Cookies.get("token") },
        }
      )
      .then((e) => {
        setFetchStatus(true);
        history.push("/movielist");
      });
  };

  const functionDelete = (id) => {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-movie/${id}`, {
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
    <MovieAppContext.Provider
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
    </MovieAppContext.Provider>
  );
};
