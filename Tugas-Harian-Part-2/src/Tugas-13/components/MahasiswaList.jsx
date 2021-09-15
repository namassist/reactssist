import React from "react";
import ListData from "./ListData";

const MahasiswaList = ({
  data,
  handleIndexOfNilai,
  handleEdit,
  handleDelete,
}) => {
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
          {data.map((mahasiswa, index) => {
            return (
              <ListData
                data={mahasiswa}
                index={index}
                indexOfNilai={handleIndexOfNilai}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
              // <tr key={index}>
              //   <td>{index + 1}</td>
              //   <td>{mahasiswa.name}</td>
              //   <td>{mahasiswa.course}</td>
              //   <td>{mahasiswa.score}</td>
              //   <td>{handleIndexOfNilai(mahasiswa.score)}</td>
              //   <td>
              //     <button onClick={handleEdit} value={mahasiswa.id}>
              //       Edit
              //     </button>
              //     <button onClick={handleDelete} value={mahasiswa.id}>
              //       Delete
              //     </button>
              //   </td>
              // </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MahasiswaList;
