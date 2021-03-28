import { ADD_PRODUCTO, CarritoActionTypes, DELETE_PRODUCTO, CarritoState, UPDATE_PRODUCTO, GET_PRODUCTOS, StoreState, ProductoCarritoState } from "../types/types"

  export const initialState: CarritoState = {
    productos: [],
    productosLista: [],
    precioTotal: 0.00,
    descuento: 0,
 }

  export function carritoReducer( state = initialState, action: CarritoActionTypes): CarritoState  {

    switch (action.type) {

      case ADD_PRODUCTO:
            return {
              ...state, 
              productos: [ ...state.productos , action.payload],
              precioTotal:   state.precioTotal + ( action.payload.cantidad * action.payload.producto.precio )
            }

        case UPDATE_PRODUCTO:
            return {
                ...state, 
                productos: [ ... state.productos.filter( p => p.producto.id !== action.payload.producto.id ) , action.payload],
                precioTotal: state.productos.map(a => 
                    (a.producto.precio * a.cantidad ) 
                    ).reduce(function(a, b)
                {
                  return a + b;
                }) + action.payload.producto.precio
        }

        case DELETE_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter( p => p.producto.id !== action.payload.producto.id ) ,
                precioTotal:  state.precioTotal - (action.payload.cantidad  * action.payload.producto.precio )
            }
      case GET_PRODUCTOS:

        return {
            ...state,
            productosLista: action.payload       
        }        
      

      default:
        return state;
    }
  }
