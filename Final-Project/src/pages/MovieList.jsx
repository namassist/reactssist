import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MovieAppContext } from "../contexts/MovieContext";

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
    useContext(MovieAppContext);

  const { fetchData, functionDelete } = functions;

  const url = "https://backendexample.sanbersy.com/api/data-movie";
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
    history.push(`/movie/edit/${id}`);
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
      field: "title",
      headerName: "Title",
      width: 150,
      sortable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
      sortable: true,
    },
    {
      field: "year",
      headerName: "Year",
      width: 70,
      align: "center",
      sortable: true,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 90,
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
      field: "rating",
      headerName: "Rating",
      width: 70,
      align: "center",
      sortable: true,
    },
    {
      field: "review",
      headerName: "Review",
      width: 200,
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
          act
        />
      </div>
    </ThemeProvider>
  );
};

export default MovieList;
