import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import FoodItalia from '../assets/fooditalia-1024x208.png'




const Formulario = () => {
  return(
    <Grid container alignItems="center" style={{
    
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left:'50%',
    width: '40%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '2px 2px 2px #000 ',
    padding: '80px'

    

    }}>

        <Grid item xs={12} sm={12} style={{ 
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'
           
            }}>
              <img src={FoodItalia} alt="foodItalia" style={{
                 width: '100%'
              }} />

        </Grid>
        <Grid item xs={12} sm={12} style={{ 
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
           
            }}>
                <TextField id="outlined-basic" label="email" variant="outlined" style={{width: '500px'}} />
        </Grid>

        <Grid item xs={12} sm={12} style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             width: '100%',
        }}>
                <TextField id="outlined-basic" label="senha" variant="outlined" style={{width: '500px',}} type='password' />
        </Grid>

        <Grid item xs={12} sm={12} style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             width: '100%',
             marginTop: '20px',
        }}>
            <Button variant="contained" href="#contained-buttons" style={{width: '500px',
            backgroundColor: 'green',
        }}>
                Entrar
            </Button>
        </Grid>

      

    </Grid>
  )
};

export default Formulario;

