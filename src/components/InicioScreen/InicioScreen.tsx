import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getProductos } from '../../helpers/storeApi';
import CardProductoInicioScreen from './cardProductosInicio/CardProductoInicioScreen';

export const InicioScreen = (props: any ) => {

  /*Nare */
  
    /* En algun momento vere de hacer que haya un paginado 
    pero por ahora devuelve todos los productos  */







  return (

    <>
    <Box
    display="flex"
    flexWrap="wrap"
    p={1}
    m={1}
    bgcolor="background.paper"
  >
    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>

     <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>


    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>

    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>

    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>

    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>

    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>

    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>


    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>


    <Box p={2} bgcolor="grey.300">
    <CardProductoInicioScreen/>  
    </Box>
  </Box>

  </>

  )
}



/*  const NN: React.FunctionComponent = () => {

    return (
      
        <>
        {false && <Dashboard />}

      <ul> 
    {posts.map ((post) => ( 
     <li key = {post.id}> 
      <h3> {post.title} </ h3 > 
      <p> {post.body} </p> 
     </li> 
   ))} 
  </ul> 

  {error && <p className = "error"> {error} </p> } 
        </>)
}
*/