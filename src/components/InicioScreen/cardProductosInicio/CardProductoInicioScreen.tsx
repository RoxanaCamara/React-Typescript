import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ProductoI } from '../../../types/types';
import { ModalProducto } from '../modalProductoCantidad/ModalProducto';


const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    },
  media: {
    height: 280,
  },
  contActions:{
    justifyContent: 'space-around',
  },
  actions:{
    textTransform: 'none',
    alignContent: 'left'
  }
});

const p  = {
  nombre: "Aceite",
  precio: 140.00,
  cantidad: 0 , 
  stock: 129,
}

export default function CardProductoInicioScreen() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://http2.mlstatic.com/D_NQ_NP_921728-MLA42481602854_072020-O.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
          La Tranquera
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            $ 150.00
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          500 gr
          Código 165029
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contActions} >
        <ModalProducto />
      </CardActions>
    </Card>
  );
}
