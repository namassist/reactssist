import React, { useContext, useEffect } from "react";
import { Table, Button } from "antd";
import { MobileDataAppsContext } from "../context/MobileDataAppsContext";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useHistory } from "react-router";

const MobileList = () => {
  let history = useHistory();
  const { mobileDataApps, functions, fetchStatus, setFetchStatus } = useContext(
    MobileDataAppsContext
  );

  const { fetchData } = functions;

  useEffect(() => {
    if (fetchStatus === false) {
      fetchData();
      setFetchStatus(true);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Release Year",
      dataIndex: "release_year",
      key: "release_year",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "platform",
      key: "platform",
      dataIndex: "platform",
    },
    {
      title: "Action",
      key: "action",
      render: (res, record) => (
        <div key={"id"}>
          <Button
            // onClick={handleEdit}
            value={res.id}
            type="primary"
            style={{ background: "yellow", color: "white" }}
          >
            <EditFilled />
          </Button>
          <Button
            // onClick={handleDelete}
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

  const handleCreate = () => {
    history.push("/mobile-form");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Mobile Apps List</h1>
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
      <Table dataSource={mobileDataApps} columns={columns} />;
    </>
  );
};

export default MobileList;
