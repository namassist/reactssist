import React from "react";

const ListData = ({ data, index, indexOfNilai, onEdit, onDelete }) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.course}</td>
      <td>{data.score}</td>
      <td>{indexOfNilai(data.score)}</td>
      <td>
        <button onClick={onEdit} value={data.id}>
          Edit
        </button>
        <button onClick={onDelete} value={data.id}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListData;
