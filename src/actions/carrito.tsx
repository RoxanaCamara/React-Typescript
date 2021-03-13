import { ADD_PRODUCTO, CarritoActionTypes, DELETE_PRODUCTO, ProductoI } from "../types/types"


export function addProducto(producto: ProductoI): CarritoActionTypes {
  return {
    type: ADD_PRODUCTO,
    payload: producto
  }
}

export function deleteProducto(producto: ProductoI): CarritoActionTypes {
    return {
      type: DELETE_PRODUCTO,
      payload: producto
    }
  }

/*export function incrementProducto(producto: ProductoI): CarritoActionTypes {
  return {
    type: INCREMENT_PRODUCTO,
    payload: producto
  }
}

export function decrementProducto(producto: ProductoI): CarritoActionTyprd {
    return {
      type: DECREMENT_PRODUCTO,
      payload: producto
    }
  }
  
*/