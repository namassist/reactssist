import React from "react";
import Cookies from "js-cookie";
import { Link } from "@mui/material";
import { useHistory } from "react-router";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Navbar = ({ toogle, opens }) => {
  const drawerWidth = 240;
  const history = useHistory();

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/login");
  };

  return (
    <AppBar position="absolute" open={opens}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        {Cookies.get("token") === undefined ? null : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toogle}
            sx={{
              marginRight: "20px",
              ...(opens && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Moviesisst
        </Typography>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <HomeIcon fontSize="small" sx={{ mr: "5px" }} />
          Home
        </Link>
        <Link
          href="/movies"
          color="inherit"
          underline="none"
          sx={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <LocalMoviesIcon fontSize="small" sx={{ mr: "5px" }} />
          Movies
        </Link>
        <Link
          href="/games"
          color="inherit"
          underline="none"
          sx={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <SportsEsportsIcon fontSize="small" sx={{ mr: "5px" }} />
          Games
        </Link>
        {Cookies.get("token") === undefined ? (
          <>
            <Link href="/login" color="inherit" underline="none" sx={{ mr: 1 }}>
              <Button
                color="secondary"
                variant="contained"
                endIcon={<LoginIcon fontSize="small" />}
              >
                Login
              </Button>
            </Link>
            <Link href="/register" color="inherit" underline="none">
              <Button
                color="secondary"
                variant="contained"
                endIcon={<AppRegistrationIcon fontSize="small" />}
              >
                Register
              </Button>
            </Link>
          </>
        ) : (
          <Button
            color="secondary"
            variant="contained"
            onClick={handleLogout}
            startIcon={<LogoutIcon fontSize="small" />}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
