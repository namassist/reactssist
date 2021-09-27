import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GameAppContext } from "../contexts/GameContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#69f0ae",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const MovieList = () => {
  const { data, fetchStatus, setFetchStatus, functions } =
    useContext(GameAppContext);

  const { fetchData, functionDelete } = functions;

  const url = "https://backendexample.sanbersy.com/api/data-game";
  const history = useHistory();

  useEffect(() => {
    if (fetchStatus) {
      fetchData(url);
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (e) => {
    let id = e;
    console.log(id);

    functionDelete(id);
  };

  const handleEdit = (e) => {
    let id = e;
    history.push(`/game/edit/${id}`);
  };

  const columns = [
    {
      field: "no",
      headerName: "No",
      width: 50,
      align: "center",
      sortable: false,
    },
    {
      field: "name",
      headerName: "name",
      width: 150,
      sortable: true,
    },
    {
      field: "image_url",
      headerName: "image_url",
      width: 200,
      sortable: true,
    },
    {
      field: "release",
      headerName: "release",
      width: 70,
      align: "center",
      sortable: true,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 100,
      sortable: true,
    },
    {
      field: "platform",
      headerName: "platform",
      width: 100,
      align: "center",
      sortable: true,
    },
    {
      field: "singlePlayer",
      headerName: "singlePlayer",
      width: 100,
      sortable: true,
    },
    {
      field: "multiplayer",
      headerName: "multiplayer",
      width: 100,
      sortable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mr: "5px" }}
              onClick={() => handleEdit(params.id)}
            >
              <EditIcon fontSize="small" sx={{ mr: "-5px" }} />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleDelete(params.id)}
            >
              <DeleteIcon fontSize="small" sx={{ mr: "-5px" }} />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = data;

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
};

export default MovieList;
