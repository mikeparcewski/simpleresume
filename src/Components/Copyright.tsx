import React from "react";
import { Container, Typography } from "@mui/material";
import { SimpleResume } from "../Objects/SimpleResume";

const Copyright = (site: SimpleResume) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          py: "1rem",
          bgcolor: "secondary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "secondary.contrastText",
            fontSize: "1.5vmax",
            fontWeight: "700",
          }}
        >
          © Copyright {new Date().getFullYear()} by {site.resume?.basics.name}
        </Typography>
      </Container>
    </>
  );
};
export default Copyright;
