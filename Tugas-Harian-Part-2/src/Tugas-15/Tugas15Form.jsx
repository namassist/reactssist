import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext";
import { Button } from "antd";

const MahasiswaForm = () => {
  let history = useHistory();
  const { input, setInput, currentId, setCurrentId, functions } =
    useContext(MahasiswaContext);
  const { functionSubmit, functionUpdate, fetchById } = functions;
  let { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      fetchById(id);
    }
    console.log(id);
  }, []);

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: typeOfValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === -1) {
      functionSubmit();
    } else {
      functionUpdate(currentId);
    }

    setInput({
      nama: "",
      course: "",
      score: 0,
    });
    setCurrentId(-1);
  };

  const handleReturn = () => {
    history.push("/tugas15");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <div className="header">
            <h1>Form Nilai Mahasiswa</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama : </label>
              <input
                required
                type="text"
                name="nama"
                onChange={handleChange}
                value={input.nama}
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
              <button type="button" onClick={handleReturn}>
                Kembali
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MahasiswaForm;
