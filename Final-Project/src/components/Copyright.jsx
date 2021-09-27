import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Copyright = () => {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mb: 0, mt: 5 }}
      >
        Copyright © &nbsp;
        <Link color="inherit" href="https://material-ui.com/">
          Moviesisst
        </Link>
        {" " + new Date().getFullYear()}.
      </Typography>
    </>
  );
};
