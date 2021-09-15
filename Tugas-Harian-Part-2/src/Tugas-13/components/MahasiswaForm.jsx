import React from "react";

const MahasiswaForm = ({ onInput, change, submit }) => {
  return (
    <div className="bottom-content">
      <div className="header">
        <h1>Form Nilai Mahasiswa</h1>
      </div>
      <form action="" onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="name">Nama : </label>
          <input
            required
            type="text"
            name="name"
            onChange={change}
            value={onInput.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Mata Kuliah : </label>
          <input
            required
            type="text"
            name="course"
            onChange={change}
            value={onInput.course}
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Nilai :</label>
          <input
            required
            type="number"
            name="score"
            onChange={change}
            value={onInput.score}
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
