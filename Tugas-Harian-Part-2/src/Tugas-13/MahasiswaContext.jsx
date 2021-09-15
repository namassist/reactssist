import React, { useState, createContext } from "react";
import axios from "axios";

export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
  const [dataMahasiswa, setDataMahasiswa] = useState([]);

  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });

  const [currentId, setCurrentId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://backendexample.sanbercloud.com/api/student-scores`
      );
      const data = response.data;
      setDataMahasiswa(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const functionSubmit = () => {
    axios
      .post(`http://backendexample.sanbercloud.com/api/student-scores`, input)
      .then(() => {
        setDataMahasiswa([...dataMahasiswa, input]);
      });
  };

  const functionUpdate = () => {
    axios
      .put(
        `http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
        input
      )
      .then(() => {
        dataMahasiswa.find((obj) =>
          obj.id === currentId ? { ...obj, input } : obj
        );
        setDataMahasiswa([...dataMahasiswa]);
        setCurrentId(null);
      });
  };

  const functionEdit = (id) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then((res) => {
        let mahasiswa = res.data;

        setInput({
          name: mahasiswa.name,
          course: mahasiswa.course,
          score: mahasiswa.score,
        });

        setCurrentId(mahasiswa.id);
      });
  };

  const functionDelete = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then(() => {
        let newMahasiswa = dataMahasiswa.filter((mahasiswa) => {
          return mahasiswa.id !== id;
        });

        setDataMahasiswa([...newMahasiswa]);
      });
  };

  const functions = {
    fetchData,
    functionSubmit,
    functionUpdate,
    functionEdit,
    functionDelete,
  };

  return (
    <MahasiswaContext.Provider
      value={{
        dataMahasiswa,
        setDataMahasiswa,
        input,
        setInput,
        currentId,
        setCurrentId,
        functions,
      }}
    >
      {props.children}
    </MahasiswaContext.Provider>
  );
};
