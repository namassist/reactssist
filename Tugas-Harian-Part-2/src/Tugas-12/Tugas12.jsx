import axios from "axios";
import React, { useState, useEffect } from "react";
import "./tugas12.css";

const Tugas12 = () => {
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
        .then((res) => {
          let mahasiswa = res.data;
          setdaftarMahasiswa([
            ...daftarMahasiswa,
            {
              id: mahasiswa.id,
              name: mahasiswa.name,
              course: mahasiswa.course,
              score: mahasiswa.score,
            },
          ]);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          input
        )
        .then(() => {
          // let mahasiswa = daftarMahasiswa.find((el) => el.id === currentId);
          // mahasiswa = input;
          let newMahasiswa = daftarMahasiswa.find((obj) =>
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
          <div className="top-content">
            <table cellSpacing="0" cellPadding="10">
              <thead>
                <tr>
                  <th>No</th>
                  <th width="100">Nama</th>
                  <th width="100">Mata Kuliah</th>
                  <th width="100">Nilai</th>
                  <th width="100">Indeks Nilai</th>
                  <th width="100">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {daftarMahasiswa.map((mahasiswa, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{mahasiswa.name}</td>
                      <td>{mahasiswa.course}</td>
                      <td>{mahasiswa.score}</td>
                      <td>{handleIndexOfNilai(mahasiswa.score)}</td>
                      <td>
                        <button onClick={handleEdit} value={mahasiswa.id}>
                          Edit
                        </button>
                        <button onClick={handleDelete} value={mahasiswa.id}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bottom-content">
            <div className="header">
              <h1>Form Nilai Mahasiswa</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama : </label>
                <input
                  required
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={input.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">Mata Kuliah : </label>
                <input
                  required
                  type="text"
                  name="course"
                  onChange={handleChange}
                  value={input.course}
                />
              </div>
              <div className="form-group">
                <label htmlFor="score">Nilai :</label>
                <input
                  required
                  type="number"
                  name="score"
                  onChange={handleChange}
                  value={input.score}
                  max="100"
                />
              </div>
              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tugas12;
