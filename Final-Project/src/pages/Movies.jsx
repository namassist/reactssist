import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MovieAppContext } from "../contexts/MovieContext";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const theme = createTheme();

export default function Movies() {
  const { data, fetchStatus, setFetchStatus, functions } =
    useContext(MovieAppContext);
  const { fetchData } = functions;
  const history = useHistory();

  useEffect(() => {
    if (fetchStatus) {
      fetchData("https://backendexample.sanbersy.com/api/data-movie");
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDetail = (id) => {
    history.push(`/movieDetail/${id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 5 }} maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Hot Movies
          </Typography>
          <Grid container spacing={4}>
            {data.map((data, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={data.image_url}
                    alt="thumbnail"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {data.title}
                    </Typography>
                    <Typography>{data.genre}</Typography>
                    <Typography>{data.year}</Typography>
                  </CardContent>
                  <CardActions sx={{ mt: -1 }}>
                    <Button size="small" onClick={() => handleDetail(data.id)}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
