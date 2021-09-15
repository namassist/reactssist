import React, { useContext } from "react";
import { MahasiswaContext } from "./MahasiswaContext";

const MahasiswaForm = () => {
  const { input, setInput, currentId, functions } =
    useContext(MahasiswaContext);

  const { functionSubmit, functionUpdate } = functions;

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === null) {
      functionSubmit();
    } else {
      functionUpdate();
    }

    setInput({
      name: "",
      course: "",
      score: 0,
    });
  };

  return (
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
  );
};

export default MahasiswaForm;
