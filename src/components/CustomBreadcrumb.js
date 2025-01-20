import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CustomBreadcrumb = ({ currentPage }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Container maxWidth="lg">
      <div
        role="presentation"
        onClick={handleClick}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Typography sx={{ color: "text.primary", fontSize: "20px", fontWeight: "bold" }}>{currentPage}</Typography>
        </Breadcrumbs>
        {window.location.pathname === "/" ? (
          <Button variant="contained" component={Link} to="/view-chart">
            View Report
          </Button>
        ) : (
          <Button variant="contained" onClick={() => window.history.back()}>
            Back
          </Button>
        )}
      </div>
    </Container>
  );
};

export default CustomBreadcrumb;
