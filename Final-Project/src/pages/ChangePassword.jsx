import React from "react";
import axios from "axios";
// import Alert from "@mui/material/Alert";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";

const ChangePassword = () => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post(
        "https://backendexample.sanbersy.com/api/change-password",
        {
          current_password: data.get("current_password"),
          new_password: data.get("new_password"),
          new_confirm_password: data.get("new_confirm_password"),
        },
        {
          headers: { Authorization: "Bearer" + Cookies.get("token") },
        }
      )
      .then((e) => {
        alert("Change Password Success!");
        history.push("/");
      })
      .catch((e) => {
        alert(e.response.data);
        // <Alert severity="error">Alert</Alert>;
      });
  };
  return (
    <Box
      alignContent="center"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Change Password
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="current_password"
              label="Current Password"
              type="password"
              id="current_password"
              autoComplete="current_password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="new_password"
              label="New Password"
              type="password"
              id="new_password"
              autoComplete="new_password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="new_confirm_password"
              label="New Confirm Password"
              type="password"
              id="new_confirm_password"
              autoComplete="new_confirm_password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePassword;
