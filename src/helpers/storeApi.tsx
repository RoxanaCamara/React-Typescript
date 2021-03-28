import { CarritoState, GET_PRODUCTOS, ProductoState } from "../types/types";
import axios, { AxiosResponse } from 'axios';


/*
para los productos en general
para los productos que lleva? y
para los carritos del usuario
para el post del carrito (compra)
*/


export const getProductos =  () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  const result = await axios.get(`http://localhost:5000/productos`)


    dispatch({ 
      type: GET_PRODUCTOS, 
      payload: result.data   
    })
    
}


export function getCarritos(id: String): void {
    axios.get(`https://jsonplaceholder.typicode.com/carritos/${id}`)
    .then(res => {
      const productos: ProductoState = res.data;
      //this.setState({ productos });
    })
}


export function compraCarrito(carrito : CarritoState, id: String): void {
    axios.post(`https://jsonplaceholder.typicode.com/carritos/${id}`, { carrito })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

    