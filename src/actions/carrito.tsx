import { ADD_PRODUCTO, CarritoActionTypes, DELETE_PRODUCTO, ProductoCarritoState, UPDATE_PRODUCTO } from "../types/types"


export function addProducto(producto: ProductoCarritoState): CarritoActionTypes {
  return {
    type: ADD_PRODUCTO,
    payload: producto
  }
}

export function deleteProducto(producto: ProductoCarritoState): CarritoActionTypes {
    return {
      type: DELETE_PRODUCTO,
      payload: producto
    }
  }


  export function updateProducto(producto: ProductoCarritoState): CarritoActionTypes {
    return {
      type: UPDATE_PRODUCTO,
      payload: producto
    }
  }