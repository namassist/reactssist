import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { MahasiswaContext } from "../../Tugas-13/MahasiswaContext";
import axios from "axios";

const MahasiswaForm = () => {
  const { input, setInput, currentId, setCurrentId, functions } =
    useContext(MahasiswaContext);
  const { functionSubmit, functionUpdate } = functions;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id !== undefined) {
      const fetchData = async () => {
        try {
          axios
            .get(
              `http://backendexample.sanbercloud.com/api/student-scores/${id}`
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
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchData();
    } else {
      setInput({
        name: "",
        course: "",
        score: 0,
      });
    }
  }, [id, setCurrentId, setInput]);

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

    history.push("/tugas14");
  };

  const handleReturn = () => {
    history.push("/tugas14");
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
