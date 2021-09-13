import React, { useState } from "react";
import "./tugas11.css";

const Tugas11 = () => {
  const [daftarBuah, setDaftarBuah] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
  ]);

  const [input, setInput] = useState({
    nama: "",
    hargaTotal: "",
    beratTotal: "",
  });

  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentIndex === -1) {
      const { nama, hargaTotal, beratTotal } = input;
      const newBuah = { nama, hargaTotal, beratTotal };
      setDaftarBuah([...daftarBuah, newBuah]);
    } else {
      let newBuah = daftarBuah;
      newBuah[currentIndex] = input;
      setDaftarBuah(newBuah);
      setCurrentIndex(-1);
    }

    setInput({
      nama: "",
      hargaTotal: "",
      beratTotal: "",
    });
  };

  const handleDelete = (event) => {
    let indexOfDelete = parseInt(event.target.value);
    const newBuah = daftarBuah.filter((buah, index) => {
      return index !== indexOfDelete;
    });

    setDaftarBuah([...newBuah]);
  };

  const handleEdit = (event) => {
    let index = parseInt(event.target.value);
    let buah = daftarBuah[index];
    setInput(buah);
    setCurrentIndex(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <h1>Daftar Harga Buah</h1>
        </div>
        <div className="content">
          <div className="top-content">
            <table cellSpacing="0" cellPadding="10">
              <thead>
                <tr>
                  <th>No</th>
                  <th width="100">Nama</th>
                  <th width="100">Harga Total</th>
                  <th width="100">Berat Total</th>
                  <th width="100">Harga per kg</th>
                  <th width="100">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {daftarBuah.map((buah, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{buah.nama}</td>
                      <td>{buah.hargaTotal}</td>
                      <td>{buah.beratTotal / 1000} kg</td>
                      <td>{(buah.hargaTotal / buah.beratTotal) * 1000}</td>
                      <td>
                        <button onClick={handleEdit} value={index}>
                          Edit
                        </button>
                        <button onClick={handleDelete} value={index}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bottom-content">
            <div className="header">
              <h1>Form Daftar Harga Buah</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nama">Nama : </label>
                <input
                  required
                  type="text"
                  name="nama"
                  onChange={handleChange}
                  value={input.nama}
                />
              </div>
              <div className="form-group">
                <label htmlFor="harga">Harga Total: </label>
                <input
                  required
                  type="text"
                  name="hargaTotal"
                  onChange={handleChange}
                  value={input.hargaTotal}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nama">Berat Total (dalam gram) :</label>
                <input
                  required
                  type="number"
                  name="beratTotal"
                  onChange={handleChange}
                  value={input.beratTotal}
                />
              </div>
              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tugas11;
