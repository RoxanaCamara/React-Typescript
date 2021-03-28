import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ModalProducto } from '../modalProductoCantidad/ModalProducto';
import { ProductoState } from '../../../types/types';


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


const p: ProductoState  = {
  id: 23456,
  nombre: "Aceite",
  marca: "2 girasoles",
  precio: 140.00,
  stock: 129,
}

const { nombre, precio, stock, descripcion, marca } = p;

export default function CardProductoInicioScreen() {


    /*Nare */

    







  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ "https://http2.mlstatic.com/D_NQ_NP_921728-MLA42481602854_072020-O.jpg" }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            TIPO:  { nombre  }  - MARCA: { marca  }
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            PRECIO:  { precio }
          </Typography>
          {
            true && 
            <Typography variant="body2" color="textSecondary" component="p">
              DESCRIPCION: { descripcion }  - STOCK: { stock }
            </Typography>
          }
          
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.contActions} >

        <ModalProducto  />

      </CardActions>
    </Card>
  );
}
