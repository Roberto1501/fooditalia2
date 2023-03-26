import React, { useEffect } from "react";
import { useState } from "react";
import ResponsiveAppBar from "../components/NavBar";
import { Grid } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function Food() {
  const [input3, setInput3] = useState(0);
  const [input5, setInput5] = useState(0);

  function handleInputChange(e) {
    setInput3(e.target.value);
  }

  function handleInputChange5(e) {
    setInput5(e.target.value);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const somaDespesas = parseFloat(input3) + parseFloat(input5);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <ResponsiveAppBar />
        </Grid>
        <Grid
          item
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ButtonGroup
            size="small"
            aria-label="small button group"
            style={{
              marginRight: "1%",
              marginTop: "1%",
            }}
          >
            <Button
              style={{
                borderColor: "#fff",
                color: "#fff",
                backgroundColor: "green",
                boxShadow: "2px 2px 2px black",
              }}
              onClick={handleClickOpen}
            >
              +
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item>
          <div>
            <Dialog
              open={open}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Adicione uma linha na tabela"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <TextField
                    id="input1"
                    label="dia"
                    variant="standard"
                    style={{ width: "500px" }}
                  />

                  <TextField
                    id="input2"
                    label="comentário"
                    variant="standard"
                    style={{ width: "500px" }}
                  />

                  <TextField
                    id="input3"
                    label="Despesa Food"
                    variant="standard"
                    style={{ width: "500px" }}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="input4"
                    label="Credito Food"
                    variant="standard"
                    style={{ width: "500px" }}
                  />

                  <TextField
                    id="input5"
                    label="Despesa Feira"
                    variant="standard"
                    style={{ width: "500px" }}
                    onChange={handleInputChange5}
                  />

                  <TextField
                    id="input6"
                    label="Credito Feira"
                    variant="standard"
                    style={{ width: "500px" }}
                  />

                  <TextField
                    id="input7"
                    label="Outros Gastos"
                    variant="standard"
                    style={{ width: "500px" }}
                  />

                  <TextField
                    id="input8"
                    label="Total"
                    variant="standard"
                    disabled={true}
                    value={somaDespesas}
                    style={{ width: "500px" }}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Food;
