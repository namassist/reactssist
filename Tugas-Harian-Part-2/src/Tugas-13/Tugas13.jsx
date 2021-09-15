// Library
import React, { useState, useEffect } from "react";
import axios from "axios";

// css
import "./styles/tugas13.css";

// Components
import MahasiswaList from "./components/MahasiswaList";
import MahasiswaForm from "./components/MahasiswaForm";

const Tugas13 = () => {
  const [daftarMahasiswa, setdaftarMahasiswa] = useState([]);

  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://backendexample.sanbercloud.com/api/student-scores`
        );
        const dataMahasiswa = response.data;
        setdaftarMahasiswa(dataMahasiswa);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [daftarMahasiswa]);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/student-scores`, input)
        .then(() => {
          setdaftarMahasiswa([...daftarMahasiswa, input]);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          input
        )
        .then(() => {
          daftarMahasiswa.find((obj) =>
            obj.id === currentId ? { ...obj, input } : obj
          );
          setdaftarMahasiswa([...daftarMahasiswa]);
          setCurrentId(null);
        });
    }

    setInput({
      name: "",
      course: "",
      score: 0,
    });
  };

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.target.value);
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
      )
      .then(() => {
        let newMahasiswa = daftarMahasiswa.filter((mahasiswa) => {
          return mahasiswa.id !== idMahasiswa;
        });

        setdaftarMahasiswa([...newMahasiswa]);
      });
  };

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.target.value);
    axios
      .get(
        `http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
      )
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

  const handleIndexOfNilai = (nilai) => {
    let index;

    if (nilai >= 80) {
      index = "A";
    } else if (nilai >= 70 && nilai < 80) {
      index = "B";
    } else if (nilai >= 60 && nilai < 70) {
      index = "C";
    } else if (nilai >= 50 && nilai < 60) {
      index = "D";
    } else {
      index = "E";
    }

    return index;
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <h1>Daftar Nilai Mahasiswa</h1>
        </div>
        <div className="content">
          <MahasiswaList
            data={daftarMahasiswa}
            handleIndexOfNilai={handleIndexOfNilai}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <MahasiswaForm
            onInput={input}
            change={handleChange}
            submit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Tugas13;
