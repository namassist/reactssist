// Library
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext";
// CSS
import "./styles/tugas14.css";

const Tugas14 = () => {
  const { changeColor, setChangeColor } = useContext(MahasiswaContext);
  const { dataMahasiswa, functions } = useContext(MahasiswaContext);

  const { fetchData, functionDelete } = functions;
  const history = useHistory();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMahasiswa]);

  const handleClick = () => {
    history.push("/tugas14/create");
  };

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.target.value);
    history.push(`tugas14/edit/${idMahasiswa}`);
  };

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.target.value);
    functionDelete(idMahasiswa);
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

  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        onClick={handleChangeColor}
        className="changeColorButton"
      >
        Change Navbar To Dark Theme
      </button>
      <div className="container">
        <div className="content">
          <div className="header">
            <h1 className="text-header">Daftar Nilai Mahasiswa</h1>
          </div>
        </div>
        <div className="top-content">
          <button type="button" onClick={handleClick}>
            Buat Data Nilai Mahasiswa Baru
          </button>
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
              {dataMahasiswa.map((mahasiswa, index) => {
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
      </div>
    </div>
  );
};

export default Tugas14;
