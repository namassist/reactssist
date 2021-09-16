import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { MahasiswaContext } from "../../Tugas-13/MahasiswaContext";

const Tugas14 = () => {
  const { dataMahasiswa, functions } = useContext(MahasiswaContext);

  const { fetchData, functionDelete } = functions;
  const history = useHistory();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMahasiswa]);

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.target.value);
    history.push(`tugas14/create/${idMahasiswa}`);
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

  return (
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
  );
};

export default Tugas14;
