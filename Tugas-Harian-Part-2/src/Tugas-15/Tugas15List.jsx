// Library
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext";
import { Table, Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

const Tugas15List = () => {
  let history = useHistory();

  const { setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } =
    useContext(MahasiswaContext);
  const { fetchData, functionDelete } = functions;

  useEffect(() => {
    if (fetchStatus === false) {
      fetchData();
      setFetchStatus(true);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.currentTarget.value);

    functionDelete(idMahasiswa);
  };

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.currentTarget.value);
    history.push(`/tugas15/edit/${idMahasiswa}`);
  };

  const handleCreate = () => {
    history.push("/tugas15/create");
    setInput({
      nama: "",
      course: "",
      score: 0,
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Index Score",
      dataIndex: "indexScore",
      key: "indexScore",
    },
    {
      title: "Action",
      key: "action",
      render: (res, record) => (
        <div key={"id"}>
          <Button
            onClick={handleEdit}
            value={res.id}
            type="primary"
            style={{ background: "yellow", color: "white" }}
          >
            <EditFilled />
          </Button>
          <Button
            onClick={handleDelete}
            value={res.id}
            type="primary"
            style={{ background: "red", color: "white" }}
          >
            <DeleteFilled />
          </Button>
        </div>
      ),
    },
  ];

  const data = dataMahasiswa;

  return (
    <div
      className="tugas15"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="content"
        style={{
          width: "80%",
        }}
      >
        <div className="header">
          <h1 style={{ textAlign: "left", marginBottom: "20px" }}>
            Daftar Nilai Mahasiswa
          </h1>
        </div>
        <div className="data-table">
          <Button
            type="button"
            onClick={handleCreate}
            style={{
              marginBottom: "20px",
              background: "#1890ff",
              color: "white",
            }}
          >
            Buat Data Nilai Mahasiswa Baru
          </Button>
          <Table columns={columns} dataSource={data} size="middle" />
        </div>
      </div>
    </div>
  );
};

export default Tugas15List;
