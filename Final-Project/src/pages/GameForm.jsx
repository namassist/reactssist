import React, { useContext, useEffect } from "react";
import { Box } from "@mui/system";
import { useParams } from "react-router";
import { GameAppContext } from "../contexts/GameContext";
import { Typography, Button, Grid, TextField } from "@mui/material";

const GameForm = () => {
  const { currentId, setCurrentId, input, setInput, functions } =
    useContext(GameAppContext);

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
      genre: "",
      image_url: "",
      name: "",
      platform: "",
      release: "",
      singlePlayer: false,
      multiplayer: false,
    });

    setCurrentId(null);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} autoComplete="off">
      <Typography component="h1" variant="h5">
        Add Game List
      </Typography>
      <Box sx={{ mt: 3, display: "flex", alignItems: "start" }}>
        <Grid container spacing={2} sx={{ mr: 1 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              value={input.name}
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
              name="platform"
              label="Platform"
              type="text"
              id="platform"
              value={input.platform}
              onChange={handleChange}
            />
          </Grid>
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
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="release"
              label="Release"
              type="text"
              id="release"
              InputProps={{ inputProps: { min: 2000, max: 2021 } }}
              value={input.release}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="singlePlayer"
              label="SinglePlayer"
              type="number"
              id="singlePlayer"
              placeholder="type 0 or 1"
              value={input.singlePlayer}
              onChange={handleChange}
              InputProps={{ inputProps: { min: 0, max: 1 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="multiplayer"
              label="Multiplayer"
              type="number"
              id="multiplayer"
              placeholder="type 0 or 1"
              value={input.multiplayer}
              onChange={handleChange}
              InputProps={{ inputProps: { min: 0, max: 1 } }}
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

export default GameForm;
