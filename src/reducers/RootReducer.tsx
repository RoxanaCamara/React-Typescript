import {combineReducers} from "redux";
import { carritoReducer } from "./carritoReducer";

const RootReducer = combineReducers({
  carrito: carritoReducer
});

export default RootReducer