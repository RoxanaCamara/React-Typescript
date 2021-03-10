import { Carrito, Producto } from "../types/types";

   export const initialState: Carrito = {
   productos: [],
   precioTotal: 0.00,
    descuento: 0,
}

type ActionType = 
    | { type: 'add_producto' , payload: Producto}
    | { type: 'increment_producto', payload: Producto }
    | { type: 'decrement_producto', payload: Producto }
    | { type: 'remove_producto', payload: Producto };


export const carritoReducer = ( state: typeof initialState, action: ActionType ) => {

    switch ( action.type ) {
     /*   case 'add_producto':
            return {
                ...state,
                precioTotal: state.precioTotal + precioxcantidad( action.payload),
                productos: [... state.productos, action.payload]  
            }
        case 'remove_producto':
            return {
                ...state,
                precioTotal: state.precioTotal - precioxcantidad( action.payload),
                productos: state.productos.filter( p => p.nombre != action.payload.nombre )
            }

        case 'decrement_producto':
            return {
                ...state,
                precioTotal: state.precioTotal - precioxcantidad( action.payload),
                productos: editCantProducto( state.productos, action.payload, 1 )        
            }

        case 'remove_producto':
            return {
                ...state,
                precioTotal: state.precioTotal - precioxcantidad( action.payload),
                productos: editCantProducto( state.productos, action.payload, -1 )        
            }*/
        default:
            return state;
    }
}

const precioxcantidad = (p: Producto ): number =>{
    return p.cantidad * p.precio;
}

const editCantProducto = (ps: Producto[], p: Producto, n: number ): Producto[] => {
    return [];
}