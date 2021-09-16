// Library
import React, { useContext } from "react";
import { useHistory } from "react-router";
import {
  MahasiswaProvider,
  MahasiswaContext,
} from "../Tugas-13/MahasiswaContext";
// Components
import MahasiswaList from "./components/MahasiswaList";
// CSS
import "./styles/tugas14.css";

const Tugas14 = () => {
  const { changeColor, setChangeColor } = useContext(MahasiswaContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/tugas14/create");
  };

  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <MahasiswaProvider>
      <div className="wrapper">
        <button
          type="button"
          onClick={handleChangeColor}
          className="changeColorButton"
        >
          Change Navbar To Dark Theme
        </button>
        <div className="container">
          <div className="header">
            <h1>Daftar Nilai Mahasiswa</h1>
          </div>
          <div className="content">
            <button type="button" onClick={handleClick}>
              Buat Data Nilai Mahasiswa Baru
            </button>
            <MahasiswaList />
          </div>
        </div>
      </div>
    </MahasiswaProvider>
  );
};

export default Tugas14;
