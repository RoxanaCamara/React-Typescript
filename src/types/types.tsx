  export interface ProductoState {
    id: number
    nombre: string
    precio: number
    descripcion?: string
    marca: string
    stock?: number
  }

  export interface ProductoCarritoState {
    producto: ProductoState
    cantidad: number
  }


  export interface CarritoState {
    productos: ProductoCarritoState[]
    productosLista: ProductoState[]
    precioTotal: number
    descuento: number
  }


   export interface StoreState {
    productos: ProductoState[]
  }
  
export const ADD_PRODUCTO    = 'ADD_PRODUCTO'
export const DELETE_PRODUCTO = 'DELETE_PRODUCTO'
export const UPDATE_PRODUCTO = 'UPDATE_PRODUCTO'
export const GET_PRODUCTOS = 'GET_PRODUCTOS'

interface addProductoAction {
  type: typeof ADD_PRODUCTO
  payload: ProductoCarritoState
}

interface deleteProductoAction {
  type: typeof DELETE_PRODUCTO
  payload: ProductoCarritoState
}


interface updateProductoAction {
  type: typeof UPDATE_PRODUCTO
  payload: ProductoCarritoState
}


interface getProductoAction {
  type: typeof GET_PRODUCTOS
  payload: ProductoState[]
}

export type CarritoActionTypes = 
  addProductoAction | 
  deleteProductoAction |  
  updateProductoAction |
  getProductoAction