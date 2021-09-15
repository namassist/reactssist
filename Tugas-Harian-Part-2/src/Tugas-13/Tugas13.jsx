import React from "react";
import { MahasiswaProvider } from "./MahasiswaContext";
import "./styles/tugas13.css";

import MahasiswaList from "./MahasiswaList";
import MahasiswaForm from "./MahasiswaForm";
const Tugas13 = () => {
  return (
    <MahasiswaProvider>
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <h1>Daftar Nilai Mahasiswa</h1>
          </div>
          <div className="content">
            <MahasiswaList />
            <MahasiswaForm />
          </div>
        </div>
      </div>
    </MahasiswaProvider>
  );
};

export default Tugas13;
