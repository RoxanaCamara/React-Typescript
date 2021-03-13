import { ADD_PRODUCTO, CarritoActionTypes, DELETE_PRODUCTO, CarritoState } from "../types/types"

  export const initialState: CarritoState = {
    productos: [],
    precioTotal: 0.00,
    descuento: 0,
 }

  export function carritoReducer( state = initialState, action: CarritoActionTypes): CarritoState {

    switch (action.type) {
        case ADD_PRODUCTO:
            return {
                ...state, 
                productos: [ ...state.productos , action.payload],
                precioTotal: state.productos.map(a => 
                    (a.precio * a.cantidad ) 
                    ).reduce(function(a, b)
                {
                  return a + b;
                }) + action.payload.precio
        }

        case DELETE_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter( p => p.id !== action.payload.id ) ,
                precioTotal: state.productos.map(a => 
                    (a.precio * a.cantidad ) 
                    ).reduce(function(a, b)
                {
                  return a + b;
                }),            
        }

        /*case INCREMENT_PRODUCTO:
        return {
            ...state,
            precioTotal: state.precioTotal + action.payload.precio,
            productos: [ ...state.productos , action.payload]        }

        case DECREMENT_PRODUCTO:
        return {
            ...state,
            precioTotal: state.precioTotal + action.payload.precio,
            productos: [ ...state.productos , action.payload]        }*/
      default:
        return state
    }
  }

