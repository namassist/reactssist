import React, { useContext, useEffect } from "react";
import { Box } from "@mui/system";
import { useParams } from "react-router";
import { MovieAppContext } from "../contexts/MovieContext";
import { Typography, Button, Grid, TextField } from "@mui/material";

const MovieForm = () => {
  const {
    // data,
    // setData,
    // fetchStatus,
    // setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
    functions,
  } = useContext(MovieAppContext);

  const { functionSubmit, fetchById, functionUpdate } = functions;
  let { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      fetchById(id);
    }
  }, []);

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: typeOfValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === null) {
      functionSubmit();
    } else {
      functionUpdate(currentId);
    }

    setInput({
      description: "",
      duration: 0,
      genre: "",
      image_url: "",
      rating: 0,
      review: "",
      title: "",
      year: 1980,
    });

    setCurrentId(null);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} autoComplete="off">
      <Typography component="h1" variant="h5">
        Add Movie List
      </Typography>
      <Box sx={{ mt: 3, display: "flex", alignItems: "start" }}>
        <Grid container spacing={2} sx={{ mr: 1 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="title"
              label="Title"
              type="text"
              id="title"
              value={input.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="genre"
              label="Genre"
              type="text"
              id="genre"
              value={input.genre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="review"
              label="Review"
              type="text"
              id="review"
              value={input.review}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              id="description"
              rows={3}
              multiline
              value={input.description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="image_url"
              label="URL Image"
              type="text"
              id="image_url"
              value={input.image_url}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="duration"
              label="Duration"
              type="number"
              id="duration"
              value={input.duration}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="rating"
              label="Rating"
              type="number"
              id="rating"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              value={input.rating}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="year"
              label="Year"
              type="number"
              id="year"
              InputProps={{ inputProps: { min: 1980, max: 2021 } }}
              value={input.year}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, display: "inline-flex" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default MovieForm;
