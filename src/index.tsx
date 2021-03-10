import { Provider } from 'react-redux';
import * as React from "react"
import { render } from "react-dom"
import { createStore } from "redux";
import AppRouters from './routers/AppRouters';
import { InicioScreen } from './components/InicioScreen/InicioScreen';


const store = createStore(
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


const rootElement = document.getElementById("root")
render(
  <React.StrictMode>
    <Provider store={store}>
      < InicioScreen />
    </Provider>
  </React.StrictMode>,
  rootElement
);
