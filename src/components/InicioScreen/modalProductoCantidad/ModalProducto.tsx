import React, { useState } from 'react';
import { createStyles, Theme, withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faCheckCircle, faShoppingCart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AppBar, ButtonGroup, IconButton, Toolbar } from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { red, green } from '../../../style/styles';
import { ProductoI } from '../../../types/types';


const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    root: {
      alignContent: 'center',
      justifyContent: 'space-around',

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    centerContent: {
      alignSelf: 'center',
    },
    appBar: {
      position: 'relative',
    },
    icons: {
      justifyContent: 'space-around',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    media: {
      width: 180,
    },
  }),
);

const producto:  ProductoI = {
  id: 4,
  nombre: "bb",
  precio: 5,
  cantidad: 6,
  descripcion: "nn",
  marca: "  ",
  stock: 7,
}


const { nombre, precio, cantidad, marca } = producto;


export const ModalProducto = ( ) => {  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGuardarCant = () => {
    setOpen(false);
    console.log(counter);
  };

  
  










  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  }

  const decrementar = (numero: number = 1): void => {
    setCounter(counter - numero);
  }

  const reset = (numero: number = 1): void => {
    setCounter( numero );
  }




  return (

    <React.Fragment>
      <Button size="small" color="primary" onClick={handleClickOpen} >
        <span>Comprar</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>


      <Dialog
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Cuanto de La Tranquera vas a llevar?
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers className={classes.centerContent}>



          <img className={classes.media} src="https://http2.mlstatic.com/D_NQ_NP_921728-MLA42481602854_072020-O.jpg" title="Live from space album cover" />

          <Typography gutterBottom> {precio} - {nombre} - { true && marca }</Typography>
          <Typography gutterBottom>Yerba - 500gr</Typography>
          <br />
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

          <TextField
              id="outlined-read-only-input"
              label="Cantidad"
              value={counter >= 1 ? counter : reset()}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />

            <Button  onClick={ () => incrementar() }><FontAwesomeIcon icon={faAngleDoubleLeft} size="3x" /></Button>
            <Button  onClick={ () => reset() }> 1 </Button>
            <Button  onClick={ () => decrementar() } ><FontAwesomeIcon icon={faAngleDoubleRight} size="3x" /></Button>
          </ButtonGroup>
          <br />
        </DialogContent>
        <DialogActions className={classes.icons} >
          <IconButton edge="start" style={red} onClick={handleClose} aria-label="close">
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
          </IconButton>
          <IconButton autoFocus style={green} onClick={handleGuardarCant}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          </IconButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
