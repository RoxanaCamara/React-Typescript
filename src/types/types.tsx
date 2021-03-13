  export interface ProductoI {
    id: number
    nombre: string
    precio: number
    cantidad: number
    descripcion?: string
    marca?: string
    stock: number
  }
  
  export interface CarritoState {
    productos: ProductoI[]
    precioTotal: number
    descuento: number
  }

export const ADD_PRODUCTO = 'ADD_PRODUCTO'
export const DELETE_PRODUCTO = 'DELETE_PRODUCTO'
/*export const INCREMENT_PRODUCTO = 'INCREMENT_PRODUCTO'
export const DECREMENT_PRODUCTO = 'DECREMENT_PRODUCTO'*/

interface addProductoAction {
  type: typeof ADD_PRODUCTO
  payload: ProductoI
}

interface deleteProductoAction {
  type: typeof DELETE_PRODUCTO
  payload: ProductoI
}

/*interface incrementProductoAction {
  type: typeof INCREMENT_PRODUCTO
  payload: ProductoI
}

interface decrementProductoAction {
  type: typeof DECREMENT_PRODUCTO
  payload: ProductoI
}*/

export type CarritoActionTypes = 
  addProductoAction | 
  deleteProductoAction 
//  | incrementProductoAction |   decrementProductoAction