import React from "react";
import ResponsiveAppBar from "../components/NavBar";
import { Grid, Typography } from "@mui/material";

function Index() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <ResponsiveAppBar />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h3" style={{ marginLeft: "1%" }}>
            Bem vindo a FoodItalia
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Index;
