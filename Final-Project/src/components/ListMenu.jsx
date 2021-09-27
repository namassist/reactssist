import React from "react";
import { Link } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MovieIcon from "@mui/icons-material/Movie";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const listItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <Link href="/" color="inherit" underline="none">
      <ListItem button href="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Divider />
    {/* <ListSubheader inset>Movies</ListSubheader> */}
    <Link href="/movielist" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary="List Movies" />
      </ListItem>
    </Link>
    <Link href="/movie/create" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Add Movies" />
      </ListItem>
    </Link>
    {/* <ListSubheader inset>Games</ListSubheader> */}
    <Divider />
    <Link href="/gamelist" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <SportsEsportsIcon />
        </ListItemIcon>
        <ListItemText primary="List Games" />
      </ListItem>
    </Link>
    <Link href="/game/create" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Add Games" />
      </ListItem>
    </Link>
    <Divider />
    {/* <ListSubheader inset>Actions</ListSubheader> */}
    <Link href="/changepassword" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
    </Link>
    {/* <ListItem button>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem> */}
  </div>
);
