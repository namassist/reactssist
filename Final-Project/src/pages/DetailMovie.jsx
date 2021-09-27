/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const DetailMovie = () => {
  const history = useHistory();
  let { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      fetchDetailById(id);
    }
  }, [detail]);

  const fetchDetailById = async (id) => {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-movie/${id}`
    );
    let fetchResult = res.data;
    setDetail(fetchResult);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" image={detail.image_url} alt="thumbnail" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2">
            {detail.title}
          </Typography>
          <Typography>
            {detail.genre} | {detail.duration} menit | {detail.year}
          </Typography>
          <br />
          <Typography>{detail.description}</Typography>
          <br />
          <Typography>
            Rating: {detail.rating} | Review: {detail.review}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: -1 }}>
          <Button size="small" onClick={() => history.push("/movies")}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DetailMovie;
