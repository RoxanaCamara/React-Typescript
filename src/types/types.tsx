   export interface Producto {
    nombre: string
    precio: number
    cantidad: number
    descripcion?: string
    stock: number
 }
  
  export interface Carrito{
    productos: Producto[]
    precioTotal: number
    descuento: number
  }

